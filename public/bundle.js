'use strict';

var data = {
    fotos:[
        {
            id: 1,
            nombre: 'Piramides de Teotihuacan',
            ruta: './img/piramides.png',
        },
        {
            id: 2,
            nombre: 'Valle de bravo',
            ruta: './img/valleBravo.png',
        },
        {
            id: 3,
            nombre: 'Angel de la independencia',
            ruta: './img/angel.png'
        }
    ]
};

//Primero cargamos las imagenes

const carrucel$1 = document.getElementById('carrusel');
const fotos = data.fotos;

const cargarImagen = (id, nombre, ruta) => {
    carrucel$1.querySelector('.carrusel-imagen').src = ruta;
    carrucel$1.querySelector('.titulo_foto').innerText = nombre;
    carrucel$1.querySelector('.carrusel-imagen').dataset.idImagen = id;
};

const cargarAnteriorSiguiente = (direccion) => {
    const idImagenActual = parseInt(carrucel$1.querySelector('.carrusel-imagen').dataset.idImagen, 10) ;//Podriamos ocupar parseInt para pasarlo a entero

    console.log('La imagen actual es:' ,idImagenActual);
    let indexImagenActual;

    fotos.forEach((foto, index) => {
        if(foto.id === idImagenActual){
            indexImagenActual = index;
            console.log(indexImagenActual);
        }
    });

    if (direccion === 'siguiente') {
        indexImagenActual++;
        const {id, nombre,ruta} = fotos[indexImagenActual];
        cargarImagen(id, nombre,ruta);
    }else if (direccion === 'anterior') {
        if(indexImagenActual > 0){
            indexImagenActual--;
            const {id, nombre,ruta} = fotos[indexImagenActual];
            cargarImagen(id, nombre,ruta);   
        }
    }
};

// Suponiendo que el archivo de datos es importado como data y contiene la información de las imágenes
// Inicializar el carrusel con la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    if (data.fotos.length > 0) {
        // Obtiene la primera imagen en el arreglo
        const primeraImagen = data.fotos[0];
        // Llama a la función cargarImagen con los datos de la primera imagen
        cargarImagen(primeraImagen.id, primeraImagen.nombre, primeraImagen.ruta);
    }
});

const paginaNueva = document.getElementById('navegador');

paginaNueva.addEventListener ('click', (e) => {
    if (e.target.closest('a')) {
        const info = document.getElementById('info');
        const titulo = document.getElementById('titulo');
        const pagina = e.target.id;
        if (pagina == 'contacto') {
            titulo.innerHTML = 'Contacto';
            info.innerHTML = 'Esta es la pagina de Contacto';
        }else if (pagina == 'ubicacion') {
            titulo.innerHTML = 'Ubicacion';
        }
    }
});

const carrucel = document.getElementById('carrusel');

carrucel.addEventListener ('click', (e) => {
    const boton = (e.target.closest('button'));
    if(boton?.dataset?.accion == 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente');
    }else if (boton?.dataset?.accion == 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }
});
