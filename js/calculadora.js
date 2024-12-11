const pantalla = document.getElementById('pantalla')

function mostrarNumero(valor){
    pantalla.value += valor
}

function Eliminar() {
    pantalla.value = ''
}

function Calcular() {
    let resultado = eval(pantalla.value)
    pantalla.value = resultado;
}