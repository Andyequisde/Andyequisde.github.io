function abrirPopup() { // Muestra el popup
    document.getElementById('popup-contacto').style.display = 'flex'; // Cambia a flex para mostrar
}
function cerrarPopup() { // Oculta el popup
    document.getElementById('popup-contacto').style.display = 'none'; // Oculta el popup
}

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    var contacto = document.getElementById('contacto-link'); // Selecciona el enlace
    if(contacto) {
        contacto.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que recargue la página
            abrirPopup(); // Abre el popup
        });
    }
});