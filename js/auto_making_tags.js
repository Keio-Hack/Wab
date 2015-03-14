$(function(){
	var parentobj =  $("#parent_of_draggedbuttons");

	var testarray = ["p", "h1", "img", "ul", "table", "li", "a"];
	for(var i = 0; i < 7; i++){
		parentobj.append($("<li><p draggable = 'true' class = 'draggedbuttons'>" + testarray[i] + "</p></li>"));
	}
});