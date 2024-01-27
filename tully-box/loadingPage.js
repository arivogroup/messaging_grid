const formTullyBox = document.getElementById("Form-Tully-Box");
const listTullyBox = document.getElementById("List-Tully-Box");
const headerMensajeClave = document.getElementById("header-mensaje-seccion");
const formMensajeClave = document.getElementById("Form-Mensaje-Clave");
const listMensajeClave = document.getElementById("List-Mensaje-Clave");

function showFormTully() {
  formTullyBox.style.display = "block";
  formTullyBox.style.opacity = "1";
}
function hideFormTully() {
  formTullyBox.style.display = "none";
  formTullyBox.style.opacity = "0";
}
function showListTully() {
  listTullyBox.style.display = "grid";
  listTullyBox.style.opacity = "1";
}
function hideListTully() {
  listTullyBox.style.display = "none";
  listTullyBox.style.opacity = "0";
}
function showHeaderMensajeClave() {
  headerMensajeClave.style.display = "flex";
}
function hideHeaderMensajeClave() {
  headerMensajeClave.style.display = "none";
}
function showFormMensajeClave() {
  formMensajeClave.style.display = "block";
  formMensajeClave.style.opacity = "1";
}
function hideFormMensajeClave() {
  formMensajeClave.style.display = "none";
  formMensajeClave.style.opacity = "0";
}
function showListMensajeClave() {
  listMensajeClave.style.display = "grid";
  listMensajeClave.style.opacity = "1";
}
function hideListMensajeClave() {
  listMensajeClave.style.display = "none";
  listMensajeClave.style.opacity = "0";
}

function mensajeClave() {}

// Tully Box
if (N_N === "" && E_E === "" && N_E === "" && E_N === "") {
  showFormTully();
  hideListTully();
  hideHeaderMensajeClave();
  hideFormMensajeClave();
  hideListMensajeClave();
} else {
  hideFormTully();
  showListTully();
  showHeaderMensajeClave();
  // Mensaje Clave
  if (col_1 === "" && col_2 === "" && col_3 === "" && col_4 == "") {
    showFormMensajeClave();
    hideListMensajeClave();
  } else {
    hideFormMensajeClave();
    showListMensajeClave();
  }
}
