function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
  }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");

  // Increment slide index and reset if necessary

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  

  // Display the current slide
  slides[slideIndex].style.display = "block";
  //setTimeout(showSlides, 10000);
  
}

// Function to change slides manually
function changeSlide(n) {
    var slides = document.getElementsByClassName("carousel-slide");
    if(slideIndex===0&&n===-1){
        slideIndex=slides.length-1;
    }
    else if(slideIndex===slides.length-1&&n===1){
        slideIndex=0;
    }
    else{
        slideIndex += n;
    }
    showSlides();
}