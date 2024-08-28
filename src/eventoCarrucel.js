import { cargarAnteriorSiguiente, cargarImagen } from "./carrucel";

const carrucel = document.getElementById('carrusel');

carrucel.addEventListener ('click', (e) => {
    const boton = (e.target.closest('button'));
    if(boton?.dataset?.accion == 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente');
    }else if (boton?.dataset?.accion == 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }
});