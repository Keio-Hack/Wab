$(function(){
	var draggedButtons = document.getElementsByClassName("draggedbuttons");
	for(var i = 0; i < draggedButtons.length; i++){
		switch(i){
			case 0:
				var obj_for_json = {
					"innerHTML" : "テキストを入力してください",
					"fontSize" : "12px",
					"color" : "black"
				};
				draggedButtons[i].css_info_json = JSON.stringify(obj_for_json);
				break;
			case 1:
				var obj_for_json = {
					"innerHTML" : "テキストを入力してください",
					"fontSize" : "48px",
					"color" : "black"
				};
				draggedButtons[i].css_info_json = JSON.stringify(obj_for_json);
				break;
		}
	}
});

	//	var obj_for_json = {
	// 	}
	// draggedButtons[i].whiteboard_obj_info_of_json = "";
	// draggedButtons[i].ondragstart = function(event){
	// 	var draggedButtonPosition = event.target.getBoundingClientRect();
	// 	//配置前のボタンのウィンドウ座標を取得
	// 	var mouseposition = {x : event.clientX, y : event.clientY};
	// 	//マウスのウィンドウ座標を取得
	// 	var settext = (mouseposition.x - draggedButtonPosition.left) + "and" + (mouseposition.y - draggedButtonPosition.top) + "and" + event.target.className +"end" + event.target.outerHTML;
	// 	console.log(settext);
	// 	event.dataTransfer.setData("text/plain",settext);
	// }