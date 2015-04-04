
var get_json_info = (function(){
	var obj_info_before = [
		{"type" : "p", "css" : {"innerHTML" : {"value" : "テキストを入力してください", "label_text" : "テキスト"}, "fontSize" : {"value" : "12px", "label_text" : "フォントサイズ"}, "color" : {"value" : "black", "label_text" : "文字の色"}}},
		{"type" : "h1", "css" : {"innerHTML" : {"value" : "テキストを入力してください", "label_text" : "テキスト"}, "fontSize" : {"value" : "48px", "label_text" : "フォントサイズ"}, "color" : {"value" : "black", "label_text" : "文字の色"}}},
		{"type" : "img", "css" : {"alt" : "画像が表示できません"}},
		{"type" : "ul", "css" : {}},
		{"type" : "table", "css" : {}},
		{"type" : "li", "css" : {}},
		{"type" : "a", "css" : {}}
	];
	var json_info = JSON.stringify(obj_info_before);
	return function(){return json_info;};
})();

$(function(){
	var getstring = JSON.parse(get_json_info());
	var parentobj =  $("#parent_of_draggedbuttons");
	var testarray = ["p", "h1", "img", "ul", "table", "li", "a"];
	for(var i = 0; i < getstring.length; i++){
		parentobj.append($("<li><p draggable = 'true' class = 'draggedbuttons'>" + getstring[i].type + "</p></li>"));

	}
});