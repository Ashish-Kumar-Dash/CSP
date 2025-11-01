function colourChecker(r,g,b) {
    if (r*0.299 + g*0.587 + b*0.114 < 127){
        return false;
    } else {
        return true;
    }
}
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return colourChecker(r,g,b) ? 'rgb(' + r + ',' + g + ',' + b + ')' : randomColor();
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item-card').forEach(function(el) {
        el.style.backgroundColor = randomColor();
    });
}); 