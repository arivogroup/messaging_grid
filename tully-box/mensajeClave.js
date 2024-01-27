//---------- Form Submit Code Related
const MC_hidden_ItemId = document.getElementById("MC-Hidden-Item-Id");
const MC_hidden_Email = document.getElementById("MC-Hidden-Email");

// Seccion Columna 1 (Col 1) -> (Nombre Ref. Capacidad)
const name_CAP = "Capacidadd-";
const hidden_CAP = document.getElementById("Hidden-Capacidad");

// Seccion Columna 2 (Col 2) -> (Nombre Ref. Vision)
const name_VIS = "Vision-";
const hidden_VIS = document.getElementById("Hidden-Vision");

// Seccion Columna 3 (Col 3) -> (Nombre Ref. Pasion por Servir)
const name_PAS = "Pasion-";
const hidden_PAS = document.getElementById("Hidden-Pasion-Servir");

///Seccion -> Involucramiento comunitario
const name_IC = "Comunitario-";
const hidden_IC = document.getElementById("Hidden-Involucramiento");

var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_mc(message) {
    hideLoading_mc();
    failureMessage_mc.innerText = message;
    failureMessage_mc.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_mc() {
    showForm_mc();
    successMessage_mc.style.display = "none";
  }

  // hide the form
  function hideForm_mc() {
    formContent_mc.style.display = "none";
  }

  // show the loading indicator
  function showLoading_mc() {
    hideForm_mc();
    successMessage_mc.style.display = "block";
  }

  // show the form
  function showForm_mc() {
    formContent_mc.style.display = "block";
  }

  // listen for xhr events
  function addListeners_mc(xhr) {
    xhr.addEventListener("loadstart", showLoading_mc);
  }

  // add xhr settings
  function addSettings_mc(xhr) {
    xhr.timeout = requestTimeout_mc;
  }

  // triggered form submit
  function triggerSubmit_mc(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    function addArrayAnsweres_mc(name) {
      let answeres = [];
      for (let i = 0; i < 10; i++) {
        let j = i + 1;
        let inputField = name + j;
        let respuesta = document.getElementById(inputField).value;
        if (respuesta === "") {
          answeres.push(" ¬");
        }
        if (respuesta != "") {
          answeres.push(respuesta + "¬");
        }
      }
      return answeres;
    }
    hidden_CAP.value = addArrayAnsweres_mc(name_CAP);
    hidden_VIS.value = addArrayAnsweres_mc(name_VIS);
    hidden_IC.value = addArrayAnsweres_mc(name_IC);
    hidden_PAS.value = addArrayAnsweres_mc(name_PAS);
    MC_hidden_ItemId.value =
      document.getElementById("Header-ItemId").textContent;
    MC_hidden_Email.value = document.getElementById("Header-Email").textContent;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_mc(xhr);
    addSettings_mc(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_mc();
        let waitSuccessMessage = setTimeout(mc_Update, 1500);
        function mc_Update() {
          hideLoading_mc();
          location.reload();
        }
      } else {
        displayError_mc(errorMessage_mc);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_mc(errorMessageTimedOut_mc);
    };
  }

  const form_mc = document.getElementById("Form-Mensaje-Clave");
  let formContent_mc = document.getElementById("wf-form-Form-Mensaje-Clave");
  let failureMessage_mc = document.getElementById(
    "Mensaje-Clave-Error-Message",
  );
  let successMessage_mc = document.getElementById(
    "Mensaje-Clave-Success-Message",
  );

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_mc = 10000;
  // error messages
  let errorMessageTimedOut_mc = "Oops! Seems this timed out. Please try again.";
  let errorMessage_mc = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_mc.addEventListener("submit", triggerSubmit_mc);
});
