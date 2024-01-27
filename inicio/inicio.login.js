// Login Button Behaivor -> Quick Login Workflow (Not Validation)
document.getElementById("submit-login").addEventListener("click", function () {
  let email_login = document.getElementsByTagName("Login-Email").value;
  let slug_login = md5(email_login);
  let URLDomain_login = window.location.host;
  window.location = "https://" + URLDomain_login + "/tully-box/" + slug_login;
});
