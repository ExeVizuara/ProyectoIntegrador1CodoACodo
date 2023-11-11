const ticket = 200;
const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const btnBorrar = document.getElementById('borrar');
const estudiante = document.getElementById('estudiante');
const trainee = document.getElementById('trainee');
const junior = document.getElementById('junior');


function borrarCampos(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "ninguno";
    totalPagar.textContent = `Total a Pagar: $ `;
}
function calcularPago() {

    let total = cantidad.value * ticket;

    // condicionar por descuentos
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
        case "ninguno":
            total = total;
            break
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});
btnBorrar.addEventListener('click', (e) => {
    e.preventDefault();
    borrarCampos();
});
estudiante.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("categoria").value = "estudiante";
});
trainee.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("categoria").value = "trainee";
});
junior.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("categoria").value = "junior";
});