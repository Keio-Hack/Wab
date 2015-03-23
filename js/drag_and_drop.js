var whiteboardHtmlInfo = {
	"html" : {
		"head" : {},
		"body" : {},
		"other" : {}
	},
	"js" : {

	}
};

var target_on_whiteboard = null;

$(function(){
var ContentInfo = function (id, position_X, position_Y, text, type){
	this.id = id;
	this.positionX = position_X;
	this.positionY = position_Y;
	this.text = text;
	this.type = type;
	this.css = {};
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
	// alert(getStringFromDataTransfer);
	var reg = /(.+)and(.+)and(.+)end(.+)/;
	var StringArray = reg.exec(getStringFromDataTransfer);
	//ドラッグ開始時に渡したデータの取得

	if(StringArray && (StringArray[3] === "draggedbuttons")){
		// alert("asdf");


		var mousePositionInButton = {x : StringArray[1], y : StringArray[2]};

		var NewElement = document.createElement("div");

		NewElement.innerHTML = "<p>p</p>";
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


		target_on_whiteboard = NewElement;
		target_on_whiteboard.querySelectorAll("p")[0].style.fontSize = "12px";
		target_on_whiteboard.classList.add('cursored_object_on_whiteboard');


		//ここから、ドロップ時にcssの欄にそのオブジェクトのcssを表示させるコード
		
		// var set_text_form = document.forms.set_css.set_text;
		// set_text_form.disabled = false;
		// set_text_form.value = target_on_whiteboard.querySelectorAll("p")[0].innerHTML;

		// var set_font_size_form = document.forms.set_css.set_font_size;
		// set_font_size_form.disabled = false;
		// set_font_size_form.value = target_on_whiteboard.querySelectorAll("p")[0].style.fontSize;
		
		// var set_css_form = document.forms.set_css;
		// for(var formobj in set_css_form){
		// 	console.log(formobj);
		// 	set_css_form[formobj].disabled = false;
		// 	switch(formobj){
		// 		case "set_text" : set_css_form[formobj].value = target_on_whiteboard.querySelectorAll("p")[0].innerHTML; break;
		// 		case "set_size" : set_css_form[formobj].value = target_on_whiteboard.querySelectorAll("p")[0].style.fontSize;
		// 	}
		// }
		
		var set_css_form = document.forms.set_css;
		for(var i = 0, len = set_css_form.length; i < len; i++){
			set_css_form[i].disabled = false;
			switch(i){
				case 0 : set_css_form[i].value = target_on_whiteboard.querySelectorAll("p")[0].innerHTML; break;
				case 1 : set_css_form[i].value = target_on_whiteboard.querySelectorAll("p")[0].style.fontSize; break;
			}
		}
		// alert(NewElement.id + "あsdふぁsdf");

		//ここまで、ドロップ時にcssの欄にそのオブジェクトのcssを表示させるコード

		NewElement.onclick = function(event){
			// alert(event.currentTarget.outerHTML);
			target_on_whiteboard = event.currentTarget;
			if(!target_on_whiteboard.classList.contains("cursored_object_on_whiteboard")){
				target_on_whiteboard.classList.add("cursored_object_on_whiteboard");
			}
			// var set_text_form = document.forms.set_css.set_text;
			// set_text_form.disabled = false;
			// set_text_form.value = target_on_whiteboard.querySelectorAll("p")[0].innerHTML;

			// var set_font_size_form = document.forms.set_css.set_font_size;
			// set_font_size_form.disabled = false;
			// set_font_size_form.value = target_on_whiteboard.querySelectorAll("p")[0].style.fontSize;
			
			var set_css_form = document.forms.set_css;
			for(var i = 0, len = set_css_form.length; i < len; i++){
			set_css_form[i].disabled = false;
			switch(i){
				case 0 : set_css_form[i].value = target_on_whiteboard.querySelectorAll("p")[0].innerHTML; break;
				case 1 : set_css_form[i].value = target_on_whiteboard.querySelectorAll("p")[0].style.fontSize;
			}
		}

			console.log(target_on_whiteboard.innerHTML + "です");
			event.stopPropagation();
		};

		// (NewElement.querySelectorAll("p"))[0].draggable = false;
		
		// var test_newelement = document.getElementById(NewElement.id);
		// if(test_newelement.onclick)console.log(test_newelement.onclick.toString());
		// var test_p_in_newelement = test_newelement.querySelectorAll("p")[0];
		// console.log(test_p_in_newelement.innerHTML);
		// if(test_p_in_newelement.onclick)console.log(test_p_in_newelement.onclick.toString());




		$(NewElement).draggable({
		containment : "parent",
		// start : function(event, ui){
		// 	target_on_whiteboard = ui.helper;
		// 	var set_text_form = document.forms.set_css.set_text;
		// 	set_text_form.disabled = false;
		// 	set_text_form.value = ui.helper.html();
		// 	event.stopPropagation();
		// },
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