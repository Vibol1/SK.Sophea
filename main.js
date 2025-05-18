// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Product hover effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.product-img').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.product-img').style.transform = 'scale(1)';
    });
});

// Add pulse animation to CTA buttons periodically
setInterval(function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            button.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
    });
}, 5000);

// Image gallery modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create image sets for each product
    const productImages = {
        'sunscreen1.jpg': [
            'assets/photo_2025-05-18_20-46-34.jpg',
            'assets/photo_2025-05-18_20-46-34 (2).jpg',
            'assets/photo_2025-05-18_20-46-34 (3).jpg',
            'assets/photo_2025-05-18_20-46-34 (4).jpg',
            'assets/photo_2025-05-18_20-46-34 (5).jpg'
        ],
        'gel2.jpg': [
            'assets/image.png',
            'assets/image.png',
            'assets/image.png',
            'assets/image.png',
            'assets/image.png'
        ],
        'skincare1.jpg': [
            'assets/wk (1).jpg',
            'assets/wk (2).jpg',
            'assets/wk (3).jpg',
            'assets/wk (4).jpg',
            'assets/wk (5).jpg'
        ],
        'M12.jpeg': [
            'assets/ricemask (1).jpg',
            'assets/ricemask (2).jpg',
            'assets/ricemask (3).jpg',
            'assets/ricemask (4).jpg',
            'assets/ricemask (5).jpg'
        ]
    };

    // Add click event to all product images
    document.querySelectorAll('.product-img').forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const imageSet = productImages[src.split('/').pop()] || [src];
            
            // Clear previous carousel items
            const carouselInner = document.querySelector('#productCarousel .carousel-inner');
            carouselInner.innerHTML = '';
            
            // Add new carousel items
            imageSet.forEach((image, index) => {
                const item = document.createElement('div');
                item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                item.innerHTML = `<img src="${image}" class="d-block w-100" alt="Product image">`;
                carouselInner.appendChild(item);
            });
            
            // Show the modal
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
            
            // Initialize carousel with autoplay
            const carousel = new bootstrap.Carousel(document.getElementById('productCarousel'), {
                interval: 2000, // 3 seconds
                ride: 'carousel',
                wrap: true
            });
        });
    });
});

