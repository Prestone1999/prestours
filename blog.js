// Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const blogPosts = document.querySelectorAll('.blog-post');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        blogPosts.forEach(post => {
            if (category === 'all') {
                post.style.display = 'block';
            } else {
                const postCategory = post.querySelector('.category-tag').textContent.toLowerCase();
                post.style.display = postCategory === category ? 'block' : 'none';
            }
        });
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
        // Here you would typically send the email to your server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// Smooth Scroll for Read More Links
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically navigate to the full blog post
        // For now, we'll just show an alert
        alert('This would navigate to the full blog post.');
    });
});

// Add animation to blog posts
const animateOnScroll = () => {
    const posts = document.querySelectorAll('.blog-post');
    
    posts.forEach(post => {
        const postPosition = post.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (postPosition < screenPosition) {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.blog-post').forEach(post => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = 'all 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in view
animateOnScroll(); 