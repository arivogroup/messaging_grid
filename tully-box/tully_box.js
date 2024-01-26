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

var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_tully(message) {
    hideLoading_tully();
    failureMessage_tully.innerText = message;
    failureMessage_tully.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_tully() {
    showForm_tully();
    successMessage_tully.style.display = "none";
  }

  // hide the form
  function hideForm_tully() {
    formContent_tully.style.display = "none";
  }

  // show the loading indicator
  function showLoading_tully() {
    hideForm_tully();
    successMessage_tully.style.display = "block";
  }

  // show the form
  function showForm_tully() {
    formContent_tully.style.display = "flex";
  }

  // listen for xhr events
  function addListeners_tully(xhr) {
    xhr.addEventListener("loadstart", showLoading_tully);
  }

  // add xhr settings
  function addSettings_tully(xhr) {
    xhr.timeout = requestTimeout_tully;
  }

  // triggered form submit
  function triggerSubmit_tully(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    function addArrayAnsweres(name) {
      let answeres = [];
      for (let i = 0; i < 10; i++) {
        let j = i + 1;
        let inputField = name + j;
        let respuesta = document.getElementById(inputField).value;
        if (respuesta != "") {
          answeres.push(respuesta + "¬");
        }
      }
      return answeres;
    }
    hidden_NN.value = addArrayAnsweres(name_NN);
    hidden_EE.value = addArrayAnsweres(name_EE);
    hidden_EN.value = addArrayAnsweres(name_EN);
    hidden_NE.value = addArrayAnsweres(name_NE);

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_tully(xhr);
    addSettings_tully(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_tully();
        let waitSuccessMessage = setTimeout(tully_Update, 1500);
        function tully_Update() {
          hideLoading_tully();
        }
      } else {
        displayError_tully(errorMessage_tully);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_tully(errorMessageTimedOut_tully);
    };
  }

  const form_tully = document.getElementById("Form-Tully-Box");
  let formContent_tully = document.getElementById("wf-form-Tully-Box");
  let failureMessage_tully = document.getElementById("Tully-Success-Message");
  let successMessage_tully = document.getElementById("Tully-Error-Message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_tully = 10000;
  // error messages
  let errorMessageTimedOut_tully =
    "Oops! Seems this timed out. Please try again.";
  let errorMessage_tully = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_tully.addEventListener("submit", triggerSubmit_tully);
});
