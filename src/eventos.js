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
