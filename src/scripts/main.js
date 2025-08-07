// se seleccionan todos los botones de like
const likeButtons = document.querySelectorAll('.like-btn');

// se recorre cada botón y se asocia su evento
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // se encuentra el contador dentro del mismo post
        const post = button.closest('.post'); // subimos al contenedor
        const counter = post.querySelector('.like-count'); // bajamos al hermano

        // se obtiene el nro actual, se convierte y se suma 1
        counter.textContent = parseInt(counter.textContent, 10) + 1;
    });
});
