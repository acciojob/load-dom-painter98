//your JS code here. If required.
function load() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "DOM load success";
  } 
  document.getElementById("demo").innerHTML = text;
}
