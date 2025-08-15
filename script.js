// Navbar scroll effectz
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Contains number
    if (/\d/.test(password)) strength += 1;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Contains special character
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
}

// Update password strength indicator
function updatePasswordStrength(password) {
    const strength = checkPasswordStrength(password);
    const strengthBar = document.querySelector('.password-strength-bar');
    
    if (!strengthBar) return;
    
    strengthBar.className = 'password-strength-bar';
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
    } else if (strength <= 4) {
        strengthBar.classList.add('medium');
    } else {
        strengthBar.classList.add('strong');
    }
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error', 'success');
        
        if (!input.value.trim()) {
            formGroup.classList.add('error');
            isValid = false;
        } else {
            formGroup.classList.add('success');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                formGroup.classList.add('error');
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^\+?[\d\s-]{10,}$/;
            if (!phoneRegex.test(input.value)) {
                formGroup.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        const passwordInput = signupForm.querySelector('#password');
        const confirmPasswordInput = signupForm.querySelector('#confirm-password');
        
        // Add password strength indicator
        const passwordGroup = passwordInput.closest('.form-group');
        const strengthIndicator = document.createElement('div');
        strengthIndicator.className = 'password-strength';
        strengthIndicator.innerHTML = '<div class="password-strength-bar"></div>';
        passwordGroup.appendChild(strengthIndicator);
        
        // Password strength check
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
        
        // Password confirmation check
        confirmPasswordInput.addEventListener('input', function() {
            const formGroup = this.closest('.form-group');
            formGroup.classList.remove('error', 'success');
            
            if (this.value !== passwordInput.value) {
                formGroup.classList.add('error');
            } else {
                formGroup.classList.add('success');
            }
        });
        
        // Form submission
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Form is valid, proceed with submission
                const formData = new FormData(this);
                const data = Object.fromEntries(formData.entries());
                
                // Here you would typically send the data to your server
                console.log('Form data:', data);
                
                // Redirect to login page
                window.location.href = 'login.html';
            }
        });
    }
}); 