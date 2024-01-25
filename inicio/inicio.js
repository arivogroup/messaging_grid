const email = document.getElementById("email");
const form = document.getElementById("form_personal");

function formatSlug(emailVal) {
  var toReplace_1 = "@";
  var toReplace_2 = ".";
  var replaceBy = "-";
  var firstStr = emailVal.toString();
  var secondStr = firstStr.replaceAll(toReplace_1, replaceBy);
  var formatStr = secondStr.replaceAll(toReplace_2, replaceBy);
  return formatStr;
}

form.onsubmit = function () {
  let slug = formatSlug(email.value);
  var URLdomain = window.location.host;
  let waitTimeOut = setTimeout(delayFunction, 2500);
  function delayFunction() {
    window.location = "https://" + URLdomain + "/tully-box/" + slug;
  }
};
