function validarInput() {
    let input = document.getElementById('texto').value;
    let mensaje = document.getElementById('mensaje');
    if(input.trim() === '') {
        mensaje.textContent = 'Por favor, ingrese un valor válido.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Valor registrado correctamente.';
        mensaje.style.color = 'green';
    }
}
