document.querySelectorAll('input')[0].addEventListener('click', volverAtras);
document.querySelectorAll('input')[1].addEventListener('click', volverPagina);


function volverAtras() {
    history.back();
}

function volverPagina() {
    history.go(parseInt(prompt('Indica el numero de paginas que quieres volver')));
}