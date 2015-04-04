$(function(){
	var saving_button = document.getElementById("saveButton");
	saving_button.onclick = function(){
		var json_data = JSON.stringify(whiteboardHtmlInfo);
		console.log(json_data);
		var testobj = JSON.parse(json_data).html.body;
		for(var obj in testobj){
			console.log(testobj[obj].id);
		}
	}
});