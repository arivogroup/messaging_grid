// Seccion Nosotros-Nosotros(N-N)
const name_NN = "N_N_";
const hidden_NN = document.getElementById("Hidden-NN");

function addArrayAnsweres(name) {
  let answeres = [];
  for (let i = 0; i < 10; i++) {
    let j = i + 1;
    let inputField = name + j;
    console.log(inputField);
    let respuesta = document.getElementById(inputField).value;
    if (respuesta != "") {
      answeres.push(respuesta + "¬");
    }
  }
  console.log(answeres);
  return answeres;
}

// Submit Form
document
  .getElementById("button_example")
  .addEventListener("click", function () {
    document.getElementById("Hidden-NN").value = addArrayAnsweres(name_NN);
  });
