//Primero cargamos las imagenes
import data from "../datos/fotosCarrucel";

const carrucel = document.getElementById('carrusel');
const fotos = data.fotos;
const tama = fotos.length;

const cargarImagen = (id, nombre, ruta) => {
    carrucel.querySelector('.carrusel-imagen').src = ruta;
    carrucel.querySelector('.titulo_foto').innerText = nombre;
    carrucel.querySelector('.carrusel-imagen').dataset.idImagen = id;
}

const cargarAnteriorSiguiente = (direccion) => {
    const idImagenActual = parseInt(carrucel.querySelector('.carrusel-imagen').dataset.idImagen, 10) ;//Podriamos ocupar parseInt para pasarlo a entero

    console.log('La imagen actual es:' ,idImagenActual);
    let indexImagenActual;

    fotos.forEach((foto, index) => {
        if(foto.id === idImagenActual){
            indexImagenActual = index;
            console.log(indexImagenActual);
        }
    })

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


export {cargarImagen, cargarAnteriorSiguiente};