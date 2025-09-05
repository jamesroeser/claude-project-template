// Design System Interactive Features

document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', currentTheme);
  
  // Theme toggle handler
  themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add transition class to prevent flash
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      body.style.transition = '';
    }, 300);
  });
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.style-guide-nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Interactive card hover effects
  const interactiveCards = document.querySelectorAll('.card-interactive');
  interactiveCards.forEach(card => {
    card.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
  
  // Form validation demo
  const errorInput = document.getElementById('error-input');
  if (errorInput) {
    errorInput.addEventListener('input', function() {
      const errorMessage = this.parentNode.querySelector('.form-error');
      if (this.value.trim() === '') {
        this.classList.add('form-input-error');
        if (errorMessage) {
          errorMessage.style.display = 'block';
        }
      } else {
        this.classList.remove('form-input-error');
        if (errorMessage) {
          errorMessage.style.display = 'none';
        }
      }
    });
  }
  
  // Notification close functionality
  const notificationCloses = document.querySelectorAll('.notification-close');
  notificationCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const notification = this.closest('.notification');
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 300);
    });
  });
  
  // Progress bar animation
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    // Animate progress bar on load
    setTimeout(() => {
      progressFill.style.width = '65%';
    }, 1000);
    
    // Click to animate to different values
    progressFill.parentNode.addEventListener('click', function() {
      const randomWidth = Math.floor(Math.random() * 100) + '%';
      progressFill.style.width = randomWidth;
    });
  }
  
  // Copy color codes to clipboard
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    const colorCode = swatch.querySelector('code');
    if (colorCode) {
      swatch.style.cursor = 'pointer';
      swatch.addEventListener('click', function() {
        const colorValue = colorCode.textContent;
        navigator.clipboard.writeText(colorValue).then(() => {
          // Show temporary feedback
          const originalText = colorCode.textContent;
          colorCode.textContent = 'Copied!';
          colorCode.style.color = 'var(--color-success-600)';
          
          setTimeout(() => {
            colorCode.textContent = originalText;
            colorCode.style.color = '';
          }, 1000);
        }).catch(err => {
          console.log('Could not copy color code:', err);
        });
      });
    }
  });
  
  // Button loading state demo
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    if (!btn.disabled && btn.textContent.includes('Primary')) {
      btn.addEventListener('click', function() {
        const originalText = this.textContent;
        const originalHTML = this.innerHTML;
        
        // Add loading spinner
        this.innerHTML = '<span style="display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></span>Loading...';
        this.disabled = true;
        
        // Reset after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalHTML;
          this.disabled = false;
        }, 2000);
      });
    }
  });
  
  // Keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // Toggle theme with Ctrl/Cmd + Shift + T
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
      e.preventDefault();
      themeToggle.click();
    }
  });
  
  // Intersection Observer for navigation highlighting
  const sections = document.querySelectorAll('.style-section');
  const navItems = document.querySelectorAll('.style-guide-nav a');
  
  const observerOptions = {
    rootMargin: '-20% 0px -80% 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all nav items
        navItems.forEach(item => item.classList.remove('nav-active'));
        
        // Add active class to current nav item
        const activeNav = document.querySelector(`.style-guide-nav a[href="#${id}"]`);
        if (activeNav) {
          activeNav.classList.add('nav-active');
        }
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Add CSS for nav-active state
  const style = document.createElement('style');
  style.textContent = `
    .nav-active {
      background: var(--color-primary-500) !important;
      color: white !important;
    }
    
    .nav-active:hover {
      background: var(--color-primary-600) !important;
    }
  `;
  document.head.appendChild(style);
  
  // Mobile navigation toggle (for responsive design)
  if (window.innerWidth <= 768) {
    // Create mobile nav toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.innerHTML = '☰';
    mobileToggle.style.cssText = `
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1001;
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: var(--spacing-2);
      font-size: 1.5rem;
      cursor: pointer;
      display: block;
    `;
    
    document.body.appendChild(mobileToggle);
    
    // Show/hide navigation on mobile
    mobileToggle.addEventListener('click', function() {
      const nav = document.querySelector('.style-guide-nav');
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }
  
  // Auto-hide notifications after 5 seconds
  const notifications = document.querySelectorAll('.notification');
  notifications.forEach(notification => {
    setTimeout(() => {
      const closeBtn = notification.querySelector('.notification-close');
      if (closeBtn) {
        closeBtn.click();
      }
    }, 5000);
  });
  
  console.log('Design System loaded successfully! 🎨');
  console.log('Press Ctrl/Cmd + Shift + T to toggle theme');
});