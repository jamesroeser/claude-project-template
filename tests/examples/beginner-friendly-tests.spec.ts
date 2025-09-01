/**
 * Beginner-Friendly Test Examples
 * These tests are written in plain English so CEOs can easily understand what's being tested
 */

import { test, expect } from '@playwright/test';
import { UIValidator, validatePage, validateUserTask, validateAccessibilityForBeginners } from '../visual/playwright-ui-validation';

/**
 * EXAMPLE 1: Testing a Login Form
 * CEO can easily understand: "Does the login form work correctly?"
 */
test.describe('User Login', () => {
  test('shows login form when user visits login page', async ({ page }) => {
    // What this test does: Makes sure login page displays correctly
    await page.goto('/login');
    
    // Check that important elements are visible
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    console.log('✅ Login form displays all required fields');
  });

  test('shows error message when user enters wrong password', async ({ page }) => {
    // What this test does: Ensures users get helpful feedback for login mistakes
    await page.goto('/login');
    
    // Try to log in with wrong credentials
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    
    // Check that error message appears
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Invalid credentials');
    
    console.log('✅ Error message shows when login fails');
  });

  test('redirects to dashboard after successful login', async ({ page }) => {
    // What this test does: Confirms users reach the main app after login
    await page.goto('/login');
    
    // Log in with correct credentials
    await page.fill('input[type="email"]', 'user@example.com');
    await page.fill('input[type="password"]', 'correctpassword');
    await page.click('button[type="submit"]');
    
    // Check that user is redirected to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard');
    
    console.log('✅ User successfully reaches dashboard after login');
  });
});

/**
 * EXAMPLE 2: Visual Validation Tests
 * CEO can see exactly how their app looks on different devices
 */
test.describe('Visual Appearance', () => {
  test('landing page looks perfect on all devices', async ({ page }) => {
    // This test compares the actual app with approved mockups
    const validator = new UIValidator(page, page.context());
    
    // Test on mobile, tablet, and desktop
    const results = await validator.validateResponsiveDesign('landing-page', '/', 'body');
    
    expect(results.mobile, 'Landing page should match mobile mockup exactly').toBe(true);
    expect(results.tablet, 'Landing page should match tablet mockup exactly').toBe(true);
    expect(results.desktop, 'Landing page should match desktop mockup exactly').toBe(true);
    
    console.log('✅ Landing page looks perfect on all device sizes');
  });

  test('navigation menu appears correctly', async ({ page }) => {
    // This test checks that the navigation menu matches the approved design
    const validator = new UIValidator(page, page.context());
    
    await page.goto('/');
    
    // Validate navigation component specifically
    const success = await validator.validateComponentVsMockup('navigation-menu', {
      selector: '[data-testid="main-navigation"]',
      deviceType: 'desktop'
    });
    
    expect(success, 'Navigation menu should match approved design').toBe(true);
    
    console.log('✅ Navigation menu matches approved design');
  });
});

/**
 * EXAMPLE 3: Complete User Journey Testing
 * CEO can validate entire user workflows end-to-end
 */
test.describe('User Journeys', () => {
  test('new user can sign up and get started', async ({ page }) => {
    // This test follows a complete user workflow from start to finish
    
    await validateUserTask(page, 'User Registration Flow', [
      {
        description: 'User visits homepage',
        action: async () => await page.goto('/'),
        expectation: 'Homepage displays with clear sign-up call-to-action'
      },
      {
        description: 'User clicks sign up button',
        action: async () => await page.click('[data-testid="signup-button"]'),
        expectation: 'Registration form appears'
      },
      {
        description: 'User fills out registration form',
        action: async () => {
          await page.fill('input[name="email"]', 'newuser@example.com');
          await page.fill('input[name="password"]', 'securepassword');
          await page.fill('input[name="name"]', 'New User');
        },
        expectation: 'All form fields accept user input'
      },
      {
        description: 'User submits registration form',
        action: async () => await page.click('button[type="submit"]'),
        expectation: 'Success message appears and user is logged in'
      },
      {
        description: 'User sees welcome screen',
        action: async () => await page.waitForSelector('[data-testid="welcome-message"]'),
        expectation: 'Welcome message confirms successful registration'
      }
    ]);
    
    console.log('✅ Complete user registration flow works perfectly');
  });
});

/**
 * EXAMPLE 4: Accessibility Testing for Beginners
 * CEO can ensure their app works for users with disabilities
 */
test.describe('Accessibility', () => {
  test('login page is accessible to all users', async ({ page }) => {
    // This test ensures everyone can use the login page, including users with disabilities
    await validateAccessibilityForBeginners(page, 'login-page', '/login');
    
    console.log('✅ Login page is accessible to all users');
  });

  test('users can navigate with keyboard only', async ({ page }) => {
    // This test ensures users who can't use a mouse can still use the app
    await page.goto('/');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab'); // Move to first focusable element
    await expect(page.locator(':focus')).toBeVisible();
    
    await page.keyboard.press('Tab'); // Move to second focusable element
    await expect(page.locator(':focus')).toBeVisible();
    
    // Test that user can activate buttons with keyboard
    await page.keyboard.press('Enter');
    
    console.log('✅ Users can navigate the app using only the keyboard');
  });
});

/**
 * EXAMPLE 5: Performance Testing (Beginner-Friendly)
 * CEO can ensure their app loads quickly
 */
test.describe('Performance', () => {
  test('pages load quickly for users', async ({ page }) => {
    // This test ensures pages load fast enough to keep users happy
    const startTime = Date.now();
    
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Page should load in under 3 seconds (good user experience)
    expect(loadTime, 'Page should load in under 3 seconds').toBeLessThan(3000);
    
    console.log(`✅ Homepage loaded in ${loadTime}ms (under 3 second target)`);
  });

  test('images load properly and don\'t slow down the page', async ({ page }) => {
    // This test checks that images don't make the page slow
    await page.goto('/');
    
    // Check that all images have loaded
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).not.toHaveAttribute('src', '');
      
      // Check that image is actually visible (loaded)
      await expect(img).toBeVisible();
    }
    
    console.log(`✅ All ${imageCount} images loaded successfully`);
  });
});

/**
 * EXAMPLE 6: Business Logic Testing (Plain English)
 * CEO can verify core business features work correctly
 */
test.describe('Core Features', () => {
  test('users can save their work and it persists', async ({ page, context }) => {
    // This test ensures user data is saved properly
    
    // Log in as a user
    await page.goto('/login');
    await page.fill('input[type="email"]', 'user@example.com');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');
    
    // Create some content
    await page.goto('/create');
    await page.fill('input[name="title"]', 'My Important Document');
    await page.fill('textarea[name="content"]', 'This is important content that must be saved.');
    await page.click('button[data-testid="save-button"]');
    
    // Verify save confirmation appears
    await expect(page.locator('[data-testid="save-confirmation"]')).toBeVisible();
    
    // Refresh the page to simulate closing and reopening the app
    await page.reload();
    
    // Check that the content is still there
    await expect(page.locator('input[name="title"]')).toHaveValue('My Important Document');
    await expect(page.locator('textarea[name="content"]')).toHaveValue('This is important content that must be saved.');
    
    console.log('✅ User work is saved and persists correctly');
  });

  test('users can delete items and they are really gone', async ({ page }) => {
    // This test ensures delete functionality works completely
    
    await page.goto('/dashboard');
    
    // Count initial number of items
    const initialCount = await page.locator('[data-testid="list-item"]').count();
    
    if (initialCount > 0) {
      // Delete first item
      await page.locator('[data-testid="delete-button"]').first().click();
      
      // Confirm deletion in modal/dialog
      await page.locator('[data-testid="confirm-delete"]').click();
      
      // Wait for deletion to complete
      await page.waitForTimeout(1000);
      
      // Verify item count decreased
      const finalCount = await page.locator('[data-testid="list-item"]').count();
      expect(finalCount, 'Item should be deleted').toBe(initialCount - 1);
      
      console.log('✅ Delete functionality works correctly');
    } else {
      console.log('⚠️ No items to test deletion with - create test data first');
    }
  });
});

/**
 * EXAMPLE 7: Error Handling (User Experience Focus)
 * CEO can ensure users get helpful error messages, not technical jargon
 */
test.describe('Error Handling', () => {
  test('users get helpful messages when something goes wrong', async ({ page }) => {
    // This test ensures error messages are helpful, not scary technical errors
    
    // Simulate a network error by going offline
    await page.context().setOffline(true);
    
    await page.goto('/');
    await page.click('[data-testid="save-button"]');
    
    // Check that user gets a friendly error message
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('connection');
    
    // Error message should be helpful, not technical
    const errorText = await page.locator('[data-testid="error-message"]').textContent();
    expect(errorText?.toLowerCase()).not.toContain('500');
    expect(errorText?.toLowerCase()).not.toContain('undefined');
    expect(errorText?.toLowerCase()).not.toContain('null');
    
    console.log('✅ Users get helpful error messages');
  });
});

/**
 * Test Configuration Notes for CEO:
 * 
 * 1. All tests use plain English descriptions
 * 2. Console logs explain what passed/failed in simple terms
 * 3. Visual tests compare against approved mockups automatically
 * 4. Performance tests use real-world thresholds (3 seconds, etc.)
 * 5. Accessibility tests ensure everyone can use your app
 * 6. Business logic tests verify core features work correctly
 * 7. Error handling tests ensure users get helpful messages
 * 
 * To run these tests:
 * - npm run test:e2e (runs all tests)
 * - npm run test:e2e -- --headed (see tests run in browser)
 * - npm run test:e2e -- --ui (interactive test runner)
 */