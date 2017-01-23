function loadDoc() {
  var xhttp = new XMLHttpRequest();
  alert(xhttp.readyState);
  // alert(xhttp.status);

	eval(xhttp.responseText);
	alert(xhttp.responseText)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "message.txt");
  xhttp.send();
}