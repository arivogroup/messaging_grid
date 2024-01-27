// Get Initials from  Names
let nombrePrincipal = document.getElementById("nombre-principal").textContent;
let nombreSuplente = document.getElementById("nombre-suplente").textContent;
let inicialesPrincipal = "";
let inicialesSuplente = "";

// Iniciales Nombre Principal
for (let i = 0; i < nombrePrincipal.length; i++) {
  if (i === 0 && nombrePrincipal[i] != " ") {
    inicialesPrincipal = nombrePrincipal[i];
  } else if (i === 0 && nombrePrincipal[i] === " ") {
    inicialesPrincipal = nombrePrincipal[i + 1];
  }
  if (i != 0 && nombrePrincipal[i] === " " && i < nombrePrincipal.length - 1) {
    inicialesPrincipal = inicialesPrincipal + nombrePrincipal[i + 1];
  }
}
// Llenando los Headers con las iniciales del nombre Principal
for (let i = 1; i <= 4; i++) {
  document.getElementById("Form-Col-" + i + "-IP").textContent =
    inicialesPrincipal;
  document.getElementById("List-Col-" + i + "-IP").textContent =
    inicialesPrincipal;
}

// Iniciales Nombre Suplente
for (let i = 0; i < nombreSuplente.length; i++) {
  if (i === 0 && nombreSuplente[i] != " ") {
    inicialesSuplente = nombreSuplente[i];
  } else if (i === 0 && nombreSuplente[i] === " ") {
    inicialesSuplente = nombreSuplente[i + 1];
  }
  if (i != 0 && nombreSuplente[i] === " " && i < nombreSuplente.length - 1) {
    inicialesSuplente = inicialesSuplente + nombreSuplente[i + 1];
  }
}
// Llenando los Headers con las iniciales del nombre Suplente
for (let i = 1; i <= 4; i++) {
  document.getElementById("Form-Col-" + i + "-IS").textContent =
    inicialesSuplente;
  document.getElementById("List-Col-" + i + "-IS").textContent =
    inicialesSuplente;
}

//---------- Showing Content Code  Related
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
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_NN.appendChild(listItem);
    document.getElementById("N_N_1").value = result;
  }
  if (array_sign_NN[j] != 0 && j != 1) {
    let initPosition = array_sign_NN[j - 1] + 2;
    let result = N_N.slice(initPosition, array_sign_NN[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_NN.appendChild(listItem);
    document.getElementById("N_N_" + j).value = result;
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
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_EE.appendChild(listItem);
    document.getElementById("E_E_1").value = result;
  }
  if (array_sign_EE[j] != 0 && j != 1) {
    let initPosition = array_sign_EE[j - 1] + 2;
    let result = E_E.slice(initPosition, array_sign_EE[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_EE.appendChild(listItem);
    document.getElementById("E_E_" + j).value = result;
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
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_NE.appendChild(listItem);
    document.getElementById("N_E_1").value = result;
  }
  if (array_sign_NE[j] != 0 && j != 1) {
    let initPosition = array_sign_NE[j - 1] + 2;
    let result = N_E.slice(initPosition, array_sign_NE[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_NE.appendChild(listItem);
    document.getElementById("N_E_" + j).value = result;
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
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_EN.appendChild(listItem);
    document.getElementById("E_N_1").value = result;
  }
  if (array_sign_EN[j] != 0 && j != 1) {
    let initPosition = array_sign_EN[j - 1] + 2;
    let result = E_N.slice(initPosition, array_sign_EN[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_EN.appendChild(listItem);
    document.getElementById("E_N_" + j).value = result;
  }
}
