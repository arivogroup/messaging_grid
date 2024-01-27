//---------- Showing Content Code  Related
// ListItem Col 1 (Capacidad)
let list_C1R1 = document.querySelector(".output_capacidad_1 ul");
list_C1R1.innerHTML = "";
let list_C1R2 = document.querySelector(".output_capacidad_2 ul");
list_C1R2.innerHTML = "";
let array_sign_C1 = [0];

// ListItem Col 2 (Vision)
let list_C2R1 = document.querySelector(".output_vision_1 ul");
list_C2R1.innerHTML = "";
let list_C2R2 = document.querySelector(".output_vision_2 ul");
list_C2R2.innerHTML = "";
let array_sign_C2 = [0];

// ListItem Col 3 (Pasion por servir)
let list_C3R1 = document.querySelector(".output_pasion_servir_1 ul");
list_C3R1.innerHTML = "";
let list_C3R2 = document.querySelector(".output_pasion_servir_2 ul");
list_C3R2.innerHTML = "";
let array_sign_C3 = [0];

// ListItem Col 4 (Involucramiento comunitario)
let list_C4R1 = document.querySelector(".output_involucramiento_1 ul");
list_C4R1.innerHTML = "";
let list_C4R2 = document.querySelector(".output_involucramiento_2 ul");
list_C4R2.innerHTML = "";
let array_sign_C4 = [0];

//ListItem -> Problemas
let list_Problemas = document.querySelector(".output_problemas ul");
list_Problemas.innerHTML = "";

//ListItem -> Medios
let list_Medios = document.querySelector(".output_medios ul");
list_Medios.innerHTML = "";

// Array -> List - Col 1
for (let i = 0; i < col_1.length; i++) {
  if (col_1[i] === "¬") {
    array_sign_C1.push(i);
  }
}

// Col 1 -> Capacidad
for (let j = 0; j < array_sign_C1.length; j++) {
  if (array_sign_C1[j] != 0 && j === 1) {
    let result = col_1.slice(array_sign_C1[j - 1], array_sign_C1[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_C1R1.appendChild(listItem);
    document.getElementById("Capacidad-1").value = result;
  }
  if (array_sign_C1[j] != 0 && j != 1) {
    let initPosition = array_sign_C1[j - 1] + 2;
    let result = col_1.slice(initPosition, array_sign_C1[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    if (j < 6) {
      list_C1R1.appendChild(listItem);
      document.getElementById("Capacidad-" + j).value = result;
    } else {
      list_C1R2.appendChild(listItem);
      document.getElementById("Capacidad-" + j).value = result;
    }
  }
}

// Array -> List - Col 2
for (let i = 0; i < col_2.length; i++) {
  if (col_2[i] === "¬") {
    array_sign_C2.push(i);
  }
}

// Col 2 -> Vision
for (let j = 0; j < array_sign_C2.length; j++) {
  if (array_sign_C2[j] != 0 && j === 1) {
    let result = col_2.slice(array_sign_C2[j - 1], array_sign_C2[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_C2R1.appendChild(listItem);
    document.getElementById("Vision-1").value = result;
  }
  if (array_sign_C2[j] != 0 && j != 1) {
    let initPosition = array_sign_C2[j - 1] + 2;
    let result = col_2.slice(initPosition, array_sign_C2[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    if (j < 6) {
      list_C2R1.appendChild(listItem);
      document.getElementById("Vision-" + j).value = result;
    } else {
      list_C2R2.appendChild(listItem);
      document.getElementById("Vision-" + j).value = result;
    }
  }
}

// Array -> List - Col 3
for (let i = 0; i < col_3.length; i++) {
  if (col_3[i] === "¬") {
    array_sign_C3.push(i);
  }
}

// Col 3 -> Pasion por servir
for (let j = 0; j < array_sign_C3.length; j++) {
  if (array_sign_C3[j] != 0 && j === 1) {
    let result = col_3.slice(array_sign_C3[j - 1], array_sign_C3[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_C3R1.appendChild(listItem);
    document.getElementById("Pasion-1").value = result;
  }
  if (array_sign_C3[j] != 0 && j != 1) {
    let initPosition = array_sign_C3[j - 1] + 2;
    let result = col_3.slice(initPosition, array_sign_C3[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    if (j < 6) {
      list_C3R1.appendChild(listItem);
      document.getElementById("Pasion-" + j).value = result;
    } else {
      list_C3R2.appendChild(listItem);
      document.getElementById("Pasion-" + j).value = result;
    }
  }
}

// Array -> List - Col 4
for (let i = 0; i < col_4.length; i++) {
  if (col_4[i] === "¬") {
    array_sign_C4.push(i);
  }
}

// Col 4 -> Involucramiento comunitario
for (let j = 0; j < array_sign_C4.length; j++) {
  if (array_sign_C4[j] != 0 && j === 1) {
    let result = col_4.slice(array_sign_C4[j - 1], array_sign_C4[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    list_C4R1.appendChild(listItem);
    document.getElementById("Comunitario-1").value = result;
  }
  if (array_sign_C4[j] != 0 && j != 1) {
    let initPosition = array_sign_C4[j - 1] + 2;
    let result = col_4.slice(initPosition, array_sign_C4[j]);
    let resultBullet = "⦿ " + result;
    let listItem = document.createElement("li");
    listItem.textContent = resultBullet;
    if (j < 6) {
      list_C4R1.appendChild(listItem);
      document.getElementById("Comunitario-" + j).value = result;
    } else {
      list_C4R2.appendChild(listItem);
      document.getElementById("Comunitario-" + j).value = result;
    }
  }
}

// Tematicas -> Problemas
for (let i = 0; i < array_Problemas.length; i++) {
  let resultBullet = "⦿ " + array_Problemas[i];
  let listItem = document.createElement("li");
  listItem.textContent = resultBullet;
  list_Problemas.appendChild(listItem);
  let posicion = i + 1;
  document.getElementById("Problematica-" + posicion).value =
    array_Problemas[i];
}

// Tematicas -> Medios
for (let i = 0; i < array_Medios.length; i++) {
  let resultBullet = "⦿ " + array_Medios[i];
  let listItem = document.createElement("li");
  listItem.textContent = resultBullet;
  list_Medios.appendChild(listItem);
  let posicion = i + 1;
  document.getElementById("Medios-" + posicion).value = array_Medios[i];
}
