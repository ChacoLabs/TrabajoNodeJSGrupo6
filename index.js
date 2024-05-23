
function validarFormulario() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let number = document.getElementById('number').value.trim();
    let adress = document.getElementById('adress').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let gateway = document.getElementById('gateway').value;
    let inputFile = document.getElementById('inputFile').files.length > 0;

    if (!name || !email || !number || !adress || !gender || !gateway || !inputFile) {
        alert('Por favor, complete todos los campos.');
        return false;
    } else {
        alert('Será contactado a la brevedad.');
        return true; 
    }
}
