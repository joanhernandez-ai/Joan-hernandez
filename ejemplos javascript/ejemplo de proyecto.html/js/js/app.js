var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClosed = document.getElementById("btnMenuClosed"),
    menuResponsive = document.getElementById("menuBar");

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
});

btnMenuClosed.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

var enlaces = document.getElementById("enlaces");

enlaces.addEventListener("click", function(){
    menuResponsive.style.transformStyle = "0.5s"
    menuResponsive.classList.remove("active");
});



//Slider Productos
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

//Evento para el boton derecho
btnDerecho.addEventListener("click", function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});


//Evento para el boton izquierdo
btnIzquierdo.addEventListener("click", function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});


//SECCION CONTACTO
var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre");
    var inputEmail = document.getElementById("email");
    var inputComments = document.getElementById("comentarios");

    // Esta es para la condición ó ||
    if(inputNombre.value == 0 
        || inputEmail.value == 0 
        || inputComments.value == 0){
        
        //Nueva sentencia, previene que se mueva a la posición original
        e.preventDefault();
        alert("Te faltan todos los campos");
    }
    else{
        e.preventDefault();
        alert("Datos enviados");

        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

formulario.addEventListener("submit", validar);

// bron scroll top



document.addEventListener('DOMContentLoaded', () => {
    const btnBoton = document.getElementById('btn-boton');
    btnBoton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Botón clickeado"); // Depuración
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



// Seleccionar el botón
const btnBoton = document.getElementById('btn-boton');

// Mostrar el botón solo cuando el usuario esté cerca del final de la página
function toggleButtonVisibility() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        btnBoton.classList.add('show'); // Muestra el botón
    } else {
        btnBoton.classList.remove('show'); // Oculta el botón
    }
}

// Función para hacer scroll hacia arriba al hacer clic en el botón
btnBoton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Mueve la página a la parte superior
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Escucha el evento de desplazamiento para verificar si el botón debe aparecer
window.addEventListener('scroll', toggleButtonVisibility);

// Llama a la función al cargar la página para ver si el botón debe aparecer
toggleButtonVisibility();
