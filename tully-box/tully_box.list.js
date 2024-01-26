//---------- Showing Content Code  Related
function listItemWebflow(result) {
  let listItem = document.createElement("li");
  listItem.textContent = result;
  list_NN.appendChild(listItem);
}

// ListItem Nosotros-Nosotros
let list_NN = document.querySelector(".output_nn ul");
list_NN.innerHTML = "";
let array_sign_NN = [0];

// ListItem Ellos-Ellos
let list_EE = document.querySelector(".output_ee ul");
list_EE.innerHTML = "";
let array_sign_EE = [0];

// ListItem Nosotros-Ellos
let list_NE = document.querySelector(".output_ne ul");
list_NE.innerHTML = "";
let array_sign_NE = [0];

// ListItem Ellos-Nosotros
let list_EN = document.querySelector(".output_en ul");
list_EN.innerHTML = "";
let array_sign_EN = [0];

// Array -> List - N_N
for (let i = 0; i < N_N.length; i++) {
  if (N_N[i] === "¬") {
    array_sign_NN.push(i);
  }
}
for (let j = 0; j < array_sign_NN.length; j++) {
  if (array_sign_NN[j] != 0 && j === 1) {
    let result = N_N.slice(array_sign_NN[j - 1], array_sign_NN[j]);
    listItemWebflow(result);
  }
  if (array_sign_NN[j] != 0 && j != 1) {
    let initPosition = array_sign_NN[j - 1] + 2;
    let result = N_N.slice(initPosition, array_sign_NN[j]);
    listItemWebflow(result);
  }
}

// Array -> List - E_E
for (let i = 0; i < E_E.length; i++) {
  if (E_E[i] === "¬") {
    array_sign_EE.push(i);
  }
}
for (let j = 0; j < array_sign_EE.length; j++) {
  if (array_sign_EE[j] != 0 && j === 1) {
    let result = E_E.slice(array_sign_EE[j - 1], array_sign_EE[j]);
    listItemWebflow(result);
  }
  if (array_sign_EE[j] != 0 && j != 1) {
    let initPosition = array_sign_EE[j - 1] + 2;
    let result = E_E.slice(initPosition, array_sign_EE[j]);
    listItemWebflow(result);
  }
}

// Array -> List - N_E
for (let i = 0; i < N_E.length; i++) {
  if (N_E[i] === "¬") {
    array_sign_NE.push(i);
  }
}
for (let j = 0; j < array_sign_NE.length; j++) {
  if (array_sign_NE[j] != 0 && j === 1) {
    let result = N_E.slice(array_sign_NE[j - 1], array_sign_NE[j]);
    listItemWebflow(result);
  }
  if (array_sign_NE[j] != 0 && j != 1) {
    let initPosition = array_sign_NE[j - 1] + 2;
    let result = N_E.slice(initPosition, array_sign_NE[j]);
    listItemWebflow(result);
  }
}

// Array -> List - E_N
for (let i = 0; i < E_N.length; i++) {
  if (E_N[i] === "¬") {
    array_sign_EN.push(i);
  }
}
for (let j = 0; j < array_sign_EN.length; j++) {
  if (array_sign_EN[j] != 0 && j === 1) {
    let result = E_N.slice(array_sign_EN[j - 1], array_sign_EN[j]);
    listItemWebflow(result);
  }
  if (array_sign_EN[j] != 0 && j != 1) {
    let initPosition = array_sign_EN[j - 1] + 2;
    let result = E_N.slice(initPosition, array_sign_EN[j]);
    listItemWebflow(result);
  }
}
