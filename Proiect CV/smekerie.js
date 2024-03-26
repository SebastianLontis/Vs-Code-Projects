var changeColorButton = document.getElementById('change-color-button'); // Folosim direct ID-ul 'change-color-button'

var originalBackgroundColor = document.body.style.backgroundColor;

var isTurquoise = false; // Schimbat numele variabilei și inițializat la false

changeColorButton.addEventListener('click', function() {
    var turqoisColor = 'rgb(42, 151, 133)'; // Corectat numele variabilei pentru culoare
    if (!isTurquoise) {
        document.body.style.backgroundColor = turqoisColor; // Corectat numele variabilei pentru culoare
        isTurquoise = true; // Actualizați starea pentru turcoaz
    } else {
        // Schimbați culoarea fundalului la culoarea originală
        document.body.style.backgroundColor = originalBackgroundColor;
        // Actualizați starea curentă
        isTurquoise = false;
    }
});
