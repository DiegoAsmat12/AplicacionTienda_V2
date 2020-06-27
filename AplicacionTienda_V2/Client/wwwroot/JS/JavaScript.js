function cambiarImagenCarousel() {
    if (document.getElementById("img-1").checked) {
        document.getElementById("img-1").checked = false;
        document.getElementById("img-2").checked = true;
        return;
    }
    if (document.getElementById("img-2").checked) {
        document.getElementById("img-2").checked = false;
        document.getElementById("img-3").checked = true;
        return;
    }
    if (document.getElementById("img-3").checked) {
        document.getElementById("img-3").checked = false;
        document.getElementById("img-1").checked = true;
        return;
    }
}