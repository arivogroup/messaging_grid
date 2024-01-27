const formTullyBox = document.getElementById("Form-Tully-Box");
const listTullyBox = document.getElementById("List-Tully-Box");
const formMensajeClave = document.getElementById("Form-Mensaje-Clave");
const listMensajeClave = document.getElementById("List-Mensaje-Clave");

// Tully Box
if (N_N === "" && E_E === "" && N_E === "" && E_N === "") {
  formTullyBox.style.display = "block";
  formTullyBox.style.opacity = "1";
  listTullyBox.style.display = "none";
  listTullyBox.style.opacity = "0";
} else {
  listTullyBox.style.display = "grid";
  listTullyBox.style.opacity = "1";
  formTullyBox.style.display = "none";
  formTullyBox.style.opacity = "0";
}

// Mensaje Clave
if (col_1 === "" && col_2 === "" && col_3 === "" && col_4 == "") {
  formMensajeClave.style.display = "block";
  formMensajeClave.style.opacity = "1";
  listMensajeClave.style.display = "none";
  listMensajeClave.style.opacity = "0";
} else {
  listMensajeClave.style.display = "grid";
  listMensajeClave.style.opacity = "1";
  formMensajeClave.style.display = "none";
  formMensajeClave.style.display = "0";
}
