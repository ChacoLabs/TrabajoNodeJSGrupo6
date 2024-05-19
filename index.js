function validarFormulario() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let adress = document.getElementById('adress').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let gateway = document.getElementById('gateway').value;
    let imagen = document.querySelector('.uploadDNI input[type="file"]').files[0];
    if (name === '' || email === '' || number === '' || adress === '' || gender === null || gateway === '' || !imagen) {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Sera contactado a la brevedad.');
    }
}