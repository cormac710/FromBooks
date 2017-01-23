function grabFile(){
	// function grabFile(file){
	var file = "message.txt"
	var request = getHTTPObject();
	if(request){
		request.onreadystatechange = function(){
			displayResponse(request);
		};
		request.open("GET", "message.txt", true);
		// GET request no data is sent
		request.send();
	}
}

// handle response, ref from onreadtstatechange
// take instance of XMLHttpRequest
function displayResponse(request) {
	// check Ready State
	// 0 => Unitialized
	// 1 => Loading
	// 2 => Loaded
	// 3 => Interactive
	// 4 => Complete
	if (request.readyState == 4) {
		alert("ready")
		// 200 => OK
		// 304 => "Not Modified"
		alert(request.status);
		if (request.status == 200 || request.status == 304) {
			alert("in");
           		alert(request.responseText);   		   
		}
	}
}
// http://stackoverflow.com/questions/5005960/xmlhttprequest-status-0-responsetext-is-empty
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

