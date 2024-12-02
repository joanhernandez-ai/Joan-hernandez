// Seleccionar elementos del DOM
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const comentarios = document.getElementById("comentarios");

// Crear contenedor para mensajes de error
const errorMensaje = document.createElement("div");
errorMensaje.id = "errorMensaje";
errorMensaje.style.color = "red";
errorMensaje.style.marginTop = "10px";
errorMensaje.style.display = "none"; // Oculto por defecto
formulario.appendChild(errorMensaje);

// Validar campos al enviar el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Limpiar mensajes de error previos
    errorMensaje.innerHTML = "";

    // Validar campos vacíos
    if (nombre.value.trim() === "" || email.value.trim() === "" || comentarios.value.trim() === "") {
        errorMensaje.style.display = "block"; // Mostrar mensaje de error
        errorMensaje.innerHTML = `
            <p><i class="fas fa-exclamation-circle"></i> Por favor, completa todos los campos.</p>
        `;
        return; // Detener la ejecución si hay errores
    }

    // Si todo está correcto
    errorMensaje.style.display = "none"; // Ocultar mensaje de error
    alert("Formulario enviado correctamente!");
    formulario.reset(); // Limpiar campos del formulario
});
