//funtia de schimbare a culorii de fundal
var changeColorButton = document.getElementById('change-color-button');

var originalBackgroundColor = document.body.style.backgroundColor;

var navbar = document.querySelector('.navbar');

var turqoisColor = 'rgb(8, 145, 135)';

var darkturqoisColor = 'rgb(0, 100, 100)';

navbar.style.backgroundColor = darkturqoisColor;
var isTurquoise = false;

changeColorButton.addEventListener('click', function() {
    
    if (!isTurquoise) {
        // Schimbăm culoarea fundalului paginii
        document.body.style.backgroundColor = turqoisColor;
        // Schimbăm culoarea fundalului navbar-ului
        navbar.style.backgroundColor = darkturqoisColor;
        // Actualizăm starea pentru turcoaz
        isTurquoise = true;
    } else {
        // Schimbăm culoarea fundalului paginii înapoi la cea originală
        document.body.style.backgroundColor = originalBackgroundColor;
        // Schimbăm culoarea fundalului navbar-ului înapoi la cea originală
        navbar.style.backgroundColor = originalBackgroundColor;
        // Actualizăm starea curentă
        isTurquoise = false;
    }
});

//funtia de schimbare a font size
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
  
    if (scrollPosition > (scrollHeight - clientHeight) / 2) {
        document.getElementById('scroll-to-bottom').style.display = 'none';
        document.getElementById('scroll-to-top').style.display = 'block';
    } else {
        document.getElementById('scroll-to-bottom').style.display = 'block';
        document.getElementById('scroll-to-top').style.display = 'none';
    }
    
  });
  
  
  function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  }
  
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  
  // function changeBackgroundColor(sectionId, color) {
  //   var section = document.getElementById(sectionId);
  //   section.style.backgroundColor = color;
  // }