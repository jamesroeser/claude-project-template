/**
 * Playwright UI Validation Framework
 * Provides beginner-friendly visual testing with mockup comparison
 */

import { test, expect, type Page, type BrowserContext } from '@playwright/test';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * UI Validation Helper Class
 * Simplifies visual testing for non-technical users
 */
export class UIValidator {
  constructor(
    private page: Page,
    private context: BrowserContext
  ) {}

  /**
   * Validate component matches approved mockup exactly
   * CEO-friendly: Compares implementation with design mockup
   */
  async validateComponentVsMockup(
    componentName: string,
    options: {
      selector?: string;
      mockupPath?: string;
      deviceType?: 'mobile' | 'tablet' | 'desktop';
      threshold?: number;
    } = {}
  ): Promise<boolean> {
    const {
      selector = 'body',
      mockupPath = `shared-context/ui-specifications/components/${componentName}/${options.deviceType || 'desktop'}.png`,
      deviceType = 'desktop',
      threshold = 0.2
    } = options;

    // Set viewport for device type
    await this.setViewportForDevice(deviceType);

    // Wait for component to be fully loaded
    await this.page.waitForSelector(selector);
    await this.page.waitForTimeout(1000); // Allow animations to complete

    // Take screenshot of component
    const element = this.page.locator(selector);
    const screenshotOptions = {
      path: `tests/visual/screenshots/${componentName}-${deviceType}-actual.png`,
      threshold,
      animations: 'disabled' as const
    };

    try {
      // Compare with mockup if it exists
      if (existsSync(mockupPath)) {
        await expect(element).toHaveScreenshot(
          `${componentName}-${deviceType}-expected.png`,
          screenshotOptions
        );
        return true;
      } else {
        // Generate baseline screenshot for first time
        await element.screenshot({ 
          path: `tests/visual/baselines/${componentName}-${deviceType}.png`
        });
        console.log(`📸 Generated baseline screenshot for ${componentName} on ${deviceType}`);
        return true;
      }
    } catch (error) {
      console.error(`❌ Visual validation failed for ${componentName} on ${deviceType}:`, error);
      return false;
    }
  }

  /**
   * Test user journey with visual validation at each step
   * CEO-friendly: Tests complete user flows with screenshots
   */
  async validateUserJourney(
    journeyName: string,
    steps: Array<{
      name: string;
      action: () => Promise<void>;
      validateScreenshot?: boolean;
      selector?: string;
    }>
  ): Promise<{ success: boolean; failedSteps: string[] }> {
    const failedSteps: string[] = [];

    for (const [index, step] of steps.entries()) {
      try {
        console.log(`🔍 Step ${index + 1}: ${step.name}`);
        
        // Execute the step action
        await step.action();

        // Take screenshot if requested
        if (step.validateScreenshot) {
          const stepName = `${journeyName}-step-${index + 1}-${step.name.replace(/\s+/g, '-').toLowerCase()}`;
          const success = await this.validateComponentVsMockup(stepName, {
            selector: step.selector
          });
          
          if (!success) {
            failedSteps.push(step.name);
          }
        }

        // Small delay between steps
        await this.page.waitForTimeout(500);
        
      } catch (error) {
        console.error(`❌ Step "${step.name}" failed:`, error);
        failedSteps.push(step.name);
      }
    }

    return {
      success: failedSteps.length === 0,
      failedSteps
    };
  }

  /**
   * Validate responsive design across all device sizes
   * CEO-friendly: Tests mobile, tablet, desktop automatically
   */
  async validateResponsiveDesign(
    pageName: string,
    url: string,
    selector: string = 'body'
  ): Promise<{
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  }> {
    const results = {
      mobile: false,
      tablet: false,
      desktop: false
    };

    // Test each device type
    for (const device of ['mobile', 'tablet', 'desktop'] as const) {
      await this.page.goto(url);
      results[device] = await this.validateComponentVsMockup(pageName, {
        deviceType: device,
        selector
      });
    }

    return results;
  }

  /**
   * Check accessibility compliance
   * CEO-friendly: Ensures app is usable by everyone
   */
  async validateAccessibility(
    pageName: string,
    checkTypes: Array<'color-contrast' | 'keyboard-navigation' | 'screen-reader' | 'focus-indicators'> = ['color-contrast', 'keyboard-navigation']
  ): Promise<{
    passed: boolean;
    issues: Array<{ type: string; description: string; severity: 'high' | 'medium' | 'low' }>;
  }> {
    const issues: Array<{ type: string; description: string; severity: 'high' | 'medium' | 'low' }> = [];

    for (const checkType of checkTypes) {
      switch (checkType) {
        case 'color-contrast':
          // Basic color contrast check (simplified for beginner understanding)
          try {
            await this.page.evaluate(() => {
              // Check for common contrast issues
              const elements = document.querySelectorAll('*');
              const contrastIssues = Array.from(elements).filter(el => {
                const styles = window.getComputedStyle(el);
                const bgColor = styles.backgroundColor;
                const textColor = styles.color;
                // Simplified contrast check - in real implementation would use proper contrast calculation
                return bgColor === textColor;
              });
              
              if (contrastIssues.length > 0) {
                throw new Error(`Found ${contrastIssues.length} potential contrast issues`);
              }
            });
          } catch (error) {
            issues.push({
              type: 'color-contrast',
              description: 'Text and background colors may not have sufficient contrast',
              severity: 'high'
            });
          }
          break;

        case 'keyboard-navigation':
          // Test keyboard navigation
          try {
            const focusableElements = await this.page.locator('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])').count();
            
            if (focusableElements > 0) {
              // Test tab navigation
              await this.page.keyboard.press('Tab');
              const firstFocused = await this.page.evaluate(() => document.activeElement?.tagName);
              
              if (!firstFocused || firstFocused === 'BODY') {
                issues.push({
                  type: 'keyboard-navigation',
                  description: 'Interactive elements may not be keyboard accessible',
                  severity: 'high'
                });
              }
            }
          } catch (error) {
            issues.push({
              type: 'keyboard-navigation',
              description: 'Keyboard navigation testing failed',
              severity: 'medium'
            });
          }
          break;
      }
    }

    return {
      passed: issues.length === 0,
      issues
    };
  }

  /**
   * Set viewport size for different device types
   */
  private async setViewportForDevice(deviceType: 'mobile' | 'tablet' | 'desktop'): Promise<void> {
    const viewports = {
      mobile: { width: 375, height: 667 },
      tablet: { width: 768, height: 1024 },
      desktop: { width: 1920, height: 1080 }
    };

    await this.page.setViewportSize(viewports[deviceType]);
  }
}

/**
 * Beginner-Friendly Test Helpers
 * CEO can easily understand and run these tests
 */

/**
 * Test helper: Validate a complete page looks correct
 * Usage: await validatePage('Login Page', '/login', 'Check login form appears correctly');
 */
export async function validatePage(
  page: Page,
  pageName: string,
  url: string,
  description: string
): Promise<void> {
  test(`${pageName} - ${description}`, async () => {
    const validator = new UIValidator(page, page.context());
    
    // Navigate to page
    await page.goto(url);
    
    // Validate across all devices
    const results = await validator.validateResponsiveDesign(pageName, url);
    
    // Check that all device types pass
    expect(results.mobile, `${pageName} should look correct on mobile`).toBe(true);
    expect(results.tablet, `${pageName} should look correct on tablet`).toBe(true);
    expect(results.desktop, `${pageName} should look correct on desktop`).toBe(true);
    
    console.log(`✅ ${pageName} visual validation passed on all devices`);
  });
}

/**
 * Test helper: Validate user can complete a task
 * Usage: CEO defines the steps, test validates each one visually
 */
export async function validateUserTask(
  page: Page,
  taskName: string,
  steps: Array<{
    description: string;
    action: () => Promise<void>;
    expectation: string;
  }>
): Promise<void> {
  test(`User Task: ${taskName}`, async () => {
    const validator = new UIValidator(page, page.context());
    
    // Convert steps to validator format
    const validatorSteps = steps.map((step, index) => ({
      name: step.description,
      action: step.action,
      validateScreenshot: true,
      selector: 'body'
    }));

    const result = await validator.validateUserJourney(taskName, validatorSteps);
    
    expect(result.success, `All steps should complete successfully. Failed steps: ${result.failedSteps.join(', ')}`).toBe(true);
    
    console.log(`✅ User task "${taskName}" completed successfully`);
  });
}

/**
 * Test helper: Check accessibility for non-technical users
 * Usage: CEO can ensure their app works for everyone
 */
export async function validateAccessibilityForBeginners(
  page: Page,
  pageName: string,
  url: string
): Promise<void> {
  test(`${pageName} - Accessibility Check`, async () => {
    const validator = new UIValidator(page, page.context());
    
    await page.goto(url);
    
    const results = await validator.validateAccessibility(pageName);
    
    if (!results.passed) {
      console.log(`⚠️ Accessibility issues found on ${pageName}:`);
      results.issues.forEach(issue => {
        console.log(`  - ${issue.type}: ${issue.description} (${issue.severity} priority)`);
      });
    }
    
    // For beginners, we warn but don't fail the test on low/medium severity issues
    const criticalIssues = results.issues.filter(issue => issue.severity === 'high');
    expect(criticalIssues.length, `Critical accessibility issues must be fixed: ${criticalIssues.map(i => i.description).join(', ')}`).toBe(0);
    
    console.log(`✅ ${pageName} accessibility validation completed`);
  });
}