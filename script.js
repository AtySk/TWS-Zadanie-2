// Mobile Menu Toggle
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu').toggleClass('active');
    });
    
    // Form Validation
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        let valid = true;
        
        // Name validation
        const meno = $('#meno').val().trim();
        if (meno.length < 5 || meno.length > 128) {
            $('#meno-error').text('Meno musí mať 5-128 znakov');
            valid = false;
        } else {
            $('#meno-error').text('');
        }
        
        // Email validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.length > 256) {
            $('#email-error').text('Zadajte platný email (max 256 znakov)');
            valid = false;
        } else {
            $('#email-error').text('');
        }
        
        // Phone validation (optional)
        const telefon = $('#telefon').val().trim();
        if (telefon && telefon.length < 7) {
            $('#telefon-error').text('Telefón musí mať aspoň 7 znakov');
            valid = false;
        } else {
            $('#telefon-error').text('');
        }
        
        // Subject validation
        const predmet = $('#predmet').val().trim();
        if (predmet.length < 3 || predmet.length > 128) {
            $('#predmet-error').text('Predmet musí mať 3-128 znakov');
            valid = false;
        } else {
            $('#predmet-error').text('');
        }
        
        // Message validation
        const sprava = $('#sprava').val().trim();
        if (sprava.length < 5) {
            $('#sprava-error').text('Správa musí mať aspoň 5 znakov');
            valid = false;
        } else {
            $('#sprava-error').text('');
        }
        
        if (valid) {
            alert('Formulár bol úspešne odoslaný!');
            this.reset();
        }
    });
    
    // Image Slider
    let currentSlide = 0;
    const slides = $('.gallery-slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.removeClass('active');
        $(slides[index]).addClass('active');
        $('.thumbnail').removeClass('active');
        $(`.thumbnail[data-index="${index}"]`).addClass('active');
    }
    
    $('.slider-next').click(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
    
    $('.slider-prev').click(function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
    
    $('.thumbnail').click(function() {
        currentSlide = parseInt($(this).attr('data-index'));
        showSlide(currentSlide);
    });
    
    // Auto-rotate slides every 5 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
});
