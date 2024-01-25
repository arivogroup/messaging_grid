var webflow = webflow || [];
webflow.push(function () {
  // display error messages
  function displayError(message) {
    hideLoading();
    failureMessage.innerText = message;
    failureMessage.style.display = "block";
  }

  // hiding the loading indicator
  function hideLoading() {
    showForm();
    successMessage.style.display = "none";
  }

  // hide the form
  function hideForm() {
    formContent.style.display = "none";
  }

  // show the loading indicator
  function showLoading() {
    hideForm();
    successMessage.style.display = "block";
  }

  // show the form
  function showForm() {
    formContent.style.display = "flex";
  }

  // listen for xhr events
  function addListeners(xhr) {
    xhr.addEventListener("loadstart", showLoading);
  }

  // add xhr settings
  function addSettings(xhr) {
    xhr.timeout = requestTimeout;
  }

  // triggerd form submit
  function triggerSubmit(event) {
    // prevent defaault behavior form submit
    event.preventDefault();

    // slug construction
    let email_slug = document.getElementById("email").value;
    let slug = md5(email_slug);

    // setup + send xhr request
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", event.srcElement.action);
    addListeners(xhr);
    addSettings(xhr);
    xhr.send(formData);

    // capture xhr response
    xhr.onload = function () {
      if (xhr.status === 302) {
        showLoading();
        let waitSuccessMessage = setTimeout(delayUpdate, 3500);
        function delayUpdate() {
          let URLdomain = window.location.host;
          window.location = "https://" + URLdomain + "tully-box" + slug;
        }
      } else {
        displayError(errorMessage);
      }
    };

    // capture xhr request timeout
    xhr.ontimeout = function () {
      displayError(errorMessageTimeOut);
    };
  }

  // define form variables
  const form = document.getElementById("form_personal");
  const formContent = document.getElementById("wf-form-Personal-Info");
  const failureMessage = document.getElementById("form-error-message");
  const successMessage = document.getElementById("form-success-message");

  let requestTimeout = 5000;
  // error messages
  let errorMessageTimeOut = "Oops! Seems this timed out. Please try again.";
  let errorMessage = "Oops! Something went wrong. Please tryy again.";

  // capture form submit
  form.addEventListener("submit", triggerSubmit);
});
