function validarFormulario() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let adress = document.getElementById('adress').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let gateway = document.getElementById('gateway').value;
    if (name === '' || email === '' || number === '' || adress === '' || gender === null || gateway === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Sera contactado a la brevedad.');
    }
}