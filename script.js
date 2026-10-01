function validarInput() {
    let inputEl = document.getElementById('texto');
    let input = inputEl.value;
    let mensaje = document.getElementById('mensaje');
    if(input.trim() === '') {
        mensaje.textContent = 'Por favor, ingrese un valor válido.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Valor "' + input + '" registrado correctamente.';
        mensaje.style.color = 'green';
        inputEl.value = '';
        inputEl.focus();
    }
}
