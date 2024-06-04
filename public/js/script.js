document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const closeButton = document.getElementById('closeButton');

  hamburgerMenu.addEventListener('click', function() {
    navbar.classList.add('open');
  });

  closeButton.addEventListener('click', function() {
    navbar.classList.remove('open');
  });
});



// window.addEventListener('scroll', function() {
//   var navbar = document.querySelector('#navbar');
//   var section2 = document.querySelector('.section2');
//   var section2Top = section2.offsetTop;

//   if (window.scrollY >= section2Top) {
//     navbar.classList.add('navbar-orange');
//     navbar.classList.remove('navbar-white');
//   } else {
//     navbar.classList.remove('navbar-orange');
//     navbar.classList.add('navbar-white');
//   }
// });











window.addEventListener('scroll', function() {
  var navbar = document.querySelector('#navbar');
  var section2Top = document.querySelector('.section1').offsetTop;
  var section2Height = document.querySelector('.section1').offsetHeight;
  var scrollPosition = window.scrollY;
  var threshold = section2Top + (section2Height * 0.899); 
  if (scrollPosition >= threshold) {
    navbar.classList.add('navbar-orange');
    navbar.classList.remove('navbar-white');
    navbar.style.display = "block";
   
    
  } else {
    navbar.classList.remove('navbar-orange');
    navbar.classList.add('navbar-white');
    navbar.style.display = "none";
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contactLink');
  
  contactLink.addEventListener('click', function(event) {
    console.log('Link clicked'); // Check if the click event is being triggered
    if (window.innerWidth <= 768) {
      console.log('Small screen detected'); // Debugging small screen detection
      event.preventDefault();
      window.location.href = 'tel:+919731100667'; // Replace with the desired phone number
    } else {
      console.log('Large screen detected'); // Debugging large screen detection
      event.preventDefault();
      document.querySelector('#contactus').scrollIntoView({ behavior: 'smooth' });
    }
  });
});















  













  