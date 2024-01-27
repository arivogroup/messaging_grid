//---------- Form Submit Code Related
const hidden_ItemId = document.getElementById("PA-Hidden-Item-Id");
const hidden_Email = document.getElementById("PA-Hidden-Email");

var Webflow = Webflow || [];
Webflow.push(function () {
  // display error message
  function displayError_pa(message) {
    hideLoading_pa();
    failureMessage_pa.innerText = message;
    failureMessage_pa.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading_pa() {
    showForm_pa();
    successMessage_pa.style.display = "none";
  }

  // hide the form
  function hideForm_pa() {
    formContent_pa.style.display = "none";
  }

  // show the loading indicator
  function showLoading_pa() {
    hideForm_pa();
    successMessage_pa.style.display = "block";
  }

  // show the form
  function showForm_pa() {
    formContent_pa.style.display = "block";
  }

  // listen for xhr events
  function addListeners_pa(xhr) {
    xhr.addEventListener("loadstart", showLoading_pa);
  }

  // add xhr settings
  function addSettings_pa(xhr) {
    xhr.timeout = requestTimeout_pa;
  }

  // triggered form submit
  function triggerSubmit_pa(event) {
    // prevent default behavior form submit behavior
    event.preventDefault();

    // fill-in user data and update Content
    hidden_ItemId.value = document.getElementById("Header-ItemId").textContent;
    hidden_Email.value = document.getElementById("Header-Email").textContent;

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners_pa(xhr);
    addSettings_pa(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading_pa();
        let waitSuccessMessage = setTimeout(pa_Update, 1500);
        function pa_Update() {
          hideLoading_pa();
        }
      } else {
        displayError_pa(errorMessage_pa);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError_pa(errorMessageTimedOut_pa);
    };
  }

  const form_pa = document.getElementById("Form-Preguntas-Adicionales");
  let formContent_pa = document.getElementById(
    "wf-form-Form-Preguntas-Adicionales",
  );
  let failureMessage_pa = document.getElementById("Preguntas-Error-Message");
  let successMessage_pa = document.getElementById("Preguntas-Success-Message");

  // set request timeout in milliseconds (1000ms = 1second)
  let requestTimeout_pa = 10000;
  // error messages
  let errorMessageTimedOut_pa = "Oops! Seems this timed out. Please try again.";
  let errorMessage_pa = "Oops! Something went wrong. Please try again.";

  // capture form submit
  form_pa.addEventListener("submit", triggerSubmit_pa);
});
