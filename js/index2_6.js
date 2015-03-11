$(function(){
	var whiteboardHtmlInfo = {
	"html" : {
		"head" : {},
		"body" : {},
		"other" : {}
	},
	"css" : {

	},
	"js" : {

	}
};
var ContentInfo = function (id, position_X, position_Y, text, type){
	this.id = id;
	this.positionX = position_X;
	this.positionY = position_Y;
	this.text = text;
	this.type = type;
};


var draggedButtons = document.getElementsByClassName("draggedbuttons");
//whiteboardの左の、配置用の要素を取得

if(draggedButtons){
	console.log(draggedButtons.length);
}
//ドラッグする要素にドラッグイベント開始時のイベントを追加
for(var i = 0; i < draggedButtons.length; i++){
	draggedButtons[i].ondragstart = function(event){
		var draggedButtonPosition = event.target.getBoundingClientRect();
		//配置前のボタンのウィンドウ座標を取得
		var mouseposition = {x : event.clientX, y : event.clientY};
		//マウスのウィンドウ座標を取得
		var settext = (mouseposition.x - draggedButtonPosition.left) + "and" + (mouseposition.y - draggedButtonPosition.top) + "and" + event.target.className +"end" + event.target.outerHTML;
		console.log(settext);
		event.dataTransfer.setData("text/plain",settext);
	}
}

/*　ここからwhiteboard処理　*/

var whiteboard = document.getElementById("whiteboard");
whiteboard.ondragover = function(event){
	event.preventDefault();

}


var idCounter = 0;
//配置した要素につけるIDに使いたい。別の方法があるだろうから、後から変えまする
function makeRandomID (){
	var randam = Math.floor(Math.random() * 1000);
	var date = new Date();
	var time = date.getTime();
	return randam + '_' + time.toString();
}

whiteboard.ondrop = function(event){
	event.preventDefault;

	console.log(event.clientX);
	console.log(event.clientY);

	var getStringFromDataTransfer = event.dataTransfer.getData("text/plain");
	alert(getStringFromDataTransfer);
	var reg = /(.+)and(.+)and(.+)end(.+)/;
	var StringArray = reg.exec(getStringFromDataTransfer);
	//ドラッグ開始時に渡したデータの取得

	if(StringArray && (StringArray[3] === "draggedbuttons")){
		// alert("asdf");


		var mousePositionInButton = {x : StringArray[1], y : StringArray[2]};

		var NewElement = document.createElement("div");
		NewElement.innerHTML = StringArray[4];
		//div要素の中にp要素が入る
		NewElement.draggable = "true";
		//div要素をドラッグ可能に
		NewElement.className = "droppedButtons";
		//droppedButtonsのCSSを適用
		NewElement.id = makeRandomID();
		// console.log(NewElement.id);

		NewElement.style.position = "absolute";

		whiteboard.appendChild(NewElement);

		var whiteboardPosition = whiteboard.getBoundingClientRect();
		// console.log("whiteboardの座標は：" + whiteboardPosition.left);
		// console.log(whiteboardPosition.top);
		var dropmouseposition = {x : event.clientX, y : event.clientY};
		var NewElementPositionInWhiteboard = {x : (dropmouseposition.x - whiteboardPosition.left),
											  y : (dropmouseposition.y - whiteboardPosition.top)};
		console.log("ホワイトボード内でのx座標は___" + NewElementPositionInWhiteboard.x);
		console.log("ホワイトボードの左端は___" + whiteboardPosition.left);
		console.log("ボタン内でのx座標は___" + mousePositionInButton.x);
		console.log("マウスのドロップ時のx座標は___" + dropmouseposition.x);

		NewElement.style.left = (NewElementPositionInWhiteboard.x)+ "px";
		// NewElement.style.left = (NewElementPositionInWhiteboard.x - mousePositionInButton.x)+ "px";
		// if(whiteboardPosition.left >= (NewElement.getBoundingClientRect().left)){
		// 	NewElement.style.left = whiteboardPosition.left + "px";
		// }else if((whiteboardPosition.left + whiteboardPosition.width) <= (NewElement.getBoundingClientRect().left + NewElement.getBoundingClientRect().width)){
		// 	NewElement.style.left = whiteboardPosition.left + whiteboardPosition.width - NewElement.getBoundingClientRect().width + "px";
		// }

		NewElement.style.top = (NewElementPositionInWhiteboard.y) + "px";
		// NewElement.style.top = (NewElementPositionInWhiteboard.y - mousePositionInButton.y) + "px";
		// if(whiteboardPosition.top >= (NewElement.getBoundingClientRect().top)){
		// 	NewElement.style.top = whiteboardPosition.top + "px";
		// }else if((whiteboardPosition.top + whiteboardPosition.height) <= (NewElement.getBoundingClientRect().top + NewElement.getBoundingClientRect().height)){
		// 	NewElement.style.top = whiteboardPosition.top + whiteboardPosition.height - NewElement.getBoundingClientRect().height + "px";
		// }

		whiteboardHtmlInfo["html"]["body"][NewElement.id] = new ContentInfo(NewElement.id, NewElement.style.left, NewElement.style.top, NewElement.innerHTML, "");

		(NewElement.querySelectorAll("p"))[0].draggable = false;

		$(NewElement).draggable({
		containment : "parent",
		stop : function(event, ui){
			whiteboardHtmlInfo["html"]["body"][event.target.id]["positionX"] = ui.position.left + "px";
			whiteboardHtmlInfo["html"]["body"][event.target.id]["positionY"]= ui.position.top + "px";
			// 文書内での座標（ウィンドウ内じゃない）を取得
			// console.log(event.target.getBoundingClientRect().left);
			// console.log(event.target.getBoundingClientRect().top);
		}
		});
	}
}
});