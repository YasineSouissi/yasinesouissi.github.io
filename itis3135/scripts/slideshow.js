$(document).ready(function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = $('.carousel-slide');
        
        // Hide all slides
        slides.hide();

        // Display the current slide
        slides.eq(slideIndex).show();
    }

    // Function to change slides manually
    function changeSlide(n) {
        slideIndex += n;
        var slides = $('.carousel-slide');

        // Reset slide index if it exceeds the number of slides
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        // Hide all slides
        slides.hide();

        // Display the current slide
        slides.eq(slideIndex).show();
    }

    // Attach event listeners to navigation buttons
    $('.prev').on('click', function() {
        changeSlide(-1);
    });

    $('.next').on('click', function() {
        changeSlide(1);
    });
});