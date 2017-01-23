function grabHTML(file){
	var request = getHTTPObject();
	if(request){
	request.onreadystatechange = function(){
		parseHTMLResponse(request);
	};
	request.open("GET", file, true);
	// GET request no data is sent
	request.send();
	}
}

function grabFile(file){
	var request = getHTTPObject();
	if(request){
	request.onreadystatechange = function(){
		parseResponse(request);
	};
	request.open("GET", file, true);
	// GET request no data is sent
	request.send();
	}
}

function grabJSON(file){
	var request = getHTTPObject();
	if(request){
		request.onreadystatechange = function(){
		parseJSONResponse(request);
	};
	request.open("GET", file, true);
	// GET request no data is sent
	request.send();
	}
}
function parseHTMLResponse(request) {
	if(request.status == 200 && request.readyState == 4){	
		var details = document.getElementById("details");		
		details.innerHTML = request.responseText;
	}
}
// document.getElementById("myDIV").appendChild(para);
function parseJSONResponse(request) {
	if(request.status == 200 && request.readyState == 4){
		// alert(request.readyState);
		// alert(request.status);
		// eval method accepts String as argument and 
		// string executed as JavaScript code
		var data = eval('('+request.responseText+')');
		var name = data.person.name;

		var para = document.createElement("p");
		var text = document.createTextNode(name);
		para.appendChild(text);
		
		var details = document.getElementById("details");
		while(details.hasChildNodes()){
			details.removeChild(details.lastChild);
		}
		details.appendChild(para);
	}
}

// document.getElementById("myDIV").appendChild(para);
function parseResponse(request) {
	if(request.status == 200 && request.readyState == 4){
		var data = request.responseXML;
		var name = data.getElementsByTagName("name")[0].firstChild.nodeValue;
		// var email = data.getElementsByTagName("website")[0].firstChild.nodeValue;
		var website = data.getElementsByTagName("email")[0].firstChild.nodeValue;

		var para = document.createElement("p");
		var text = document.createTextNode(name);
		// var text = para.innterHTML(name + "<br>" + website);
		para.appendChild(text);
		
		var details = document.getElementById("details");
		while(details.hasChildNodes()){
			details.removeChild(details.lastChild);
		}
		details.appendChild(para);
	}
}

function getHTTPObject() {
	var xhr = false;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();	
	} else if (window.ActiveXObject) {
		try{
			xhr = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e){
				xhr = false;
			}
		}
	}
	return xhr;
}
