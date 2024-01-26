// Seccion Nosotros-Nosotros(N-N)
const name_NN = "N_N_";
const hidden_NN = document.getElementById("Hidden-NN");

// Seccion Ellos-Ellos (E-E)
const name_EE = "E_E_";
const hidden_EE = document.getElementById("Hidden-EE");

//Seccion Nosotros-Ellos (N-E)
const name_NE = "N_E_";
const hidden_NE = document.getElementById("Hidden-NE");

///Seccion Ellos-Nosotros (E-N)
const name_EN = "E_N_";
const hidden_EN = document.getElementById("Hidden-EN");

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
    hidden_NN.value = addArrayAnsweres(name_NN);
    hidden_EE.value = addArrayAnsweres(name_EE);
    hidden_EN.value = addArrayAnsweres(name_EN);
    hidden_NE.value = addArrayAnsweres(name_NE);
  });
