//funtia de schimbare a culorii de fundal
var originalBackgroundColor = document.body.style.backgroundColor;

var changeColorButton = document.getElementById('change-color-button');

var navbar = document.querySelector('.navbar');

var turqoisColor = 'rgb(8, 145, 135)';
var darkturqoisColor = 'rgb(0, 100, 100)';

navbar.style.backgroundColor = originalBackgroundColor;

var isTurquoise = false;

changeColorButton.addEventListener('click', function() {
    if (!isTurquoise) {
        document.body.style.backgroundColor = turqoisColor;
        navbar.style.backgroundColor = darkturqoisColor;
        isTurquoise = true;
    } else {
        document.body.style.backgroundColor = originalBackgroundColor;
        navbar.style.backgroundColor = originalBackgroundColor;
        isTurquoise = false;
    }
});


//funtia de scroll to top si scroll to bottom
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

// Functia pentru a derula pagină în partea de jos
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Functia pentru a derula pagină în partea de sus
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('load', function() {
    document.getElementById('scroll-to-bottom').style.display = 'block';
    document.getElementById('scroll-to-top').style.display = 'none';
});



function updateName() {
    let titleNameH1= document.getElementById("nume");
    const newNameH1=prompt("Introduceti numele dumneavoastra: ");
    if(newNameH1!==null && newNameH1!==""){
        titleNameH1.innerHTML=newNameH1;
    }
}