// Suponiendo que el archivo de datos es importado como data y contiene la información de las imágenes
import data from "../datos/fotosCarrucel";
import { cargarImagen } from "./carrucel";
// Inicializar el carrusel con la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    if (data.fotos.length > 0) {
        // Obtiene la primera imagen en el arreglo
        const primeraImagen = data.fotos[0];
        // Llama a la función cargarImagen con los datos de la primera imagen
        cargarImagen(primeraImagen.id, primeraImagen.nombre, primeraImagen.ruta);
    }
});
