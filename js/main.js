// Obtener el elemento de título y descripción de la experiencia
var tituloExperiencia = document.getElementById('titulo-experiencia');
var descripcionExperiencia = document.getElementById('descripcion-experiencia');

// Función para cambiar el contenido cuando se hace clic
function cambiarContenido() {
    // Verificar si el texto actual es "FORMACION"
    if (tituloExperiencia.textContent.trim() === 'FORMACION') {
        // Cambiar el texto del título y la descripción
        tituloExperiencia.textContent = 'Descripción de la formación';
        descripcionExperiencia.textContent = 'Aquí va la descripción de la formación...';
    } else {
        // Si el texto actual no es "FORMACION", cambiar de nuevo a "FORMACION"
        tituloExperiencia.textContent = 'FORMACION';
        descripcionExperiencia.textContent = 'Haz clic para ver la descripción';
    }
}

// Escuchar el evento de clic en el elemento de título
tituloExperiencia.addEventListener('click', cambiarContenido);