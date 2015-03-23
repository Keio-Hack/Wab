/* ここからテキストをセットするためのフォーム*/

 $(function(){
 	var set_text_form = document.forms.set_css.set_text;
 	set_text_form.onchange = function(event){
 		// alert(event.target.value);
 		target_on_whiteboard.querySelectorAll("p")[0].innerHTML = event.target.value;
 		whiteboardHtmlInfo.html.body[target_on_whiteboard.id].text = event.target.value;
 	}
 	set_text_form.onclick = function(){
 		// alert("stopPropagation");
 		event.stopPropagation();
 	}
 });
 /*ここまでテキストをセットするためのフォーム*/

 $(function(){
 	var body = document.body;
 	body.onclick = function(event){

 		if(target_on_whiteboard){
 			 // alert("set_text_form.valueaaaf");
 			// var set_text_form = document.forms.set_css.set_text;
 			// set_text_form.value = "";
 			// set_text_form.disabled = true;
 			
 			// var set_css_forms = document.forms.set_css;
 			// for(var obj in set_css_forms){
 			// 	set_css_forms[obj].value = "";
 			// 	set_css_forms[obj].disabled = true;
 			// }
 			
 			var set_css_form = document.forms.set_css;
 			for(var i = 0, len = set_css_form.length; i < len; i++){
 				set_css_form[i].value = "";
 				set_css_form[i].disabled = true;
 			}
 			if(target_on_whiteboard.classList.contains('cursored_object_on_whiteboard')){
 				target_on_whiteboard.classList.remove("cursored_object_on_whiteboard");
 			}
 			target_on_whiteboard = null;
 		}
 	}
 });

$(function(){
	var set_font_size_form = document.forms.set_css.set_font_size;
	set_font_size_form.onchange = function(event){
		target_on_whiteboard.querySelectorAll("p")[0].style.fontSize = event.target.value;
		whiteboardHtmlInfo.html.body[target_on_whiteboard.id].css["font-size"] = event.target.value;
	}
	set_font_size_form.onclick = function(){
 	// alert("stopPropagation");
 	event.stopPropagation();
 	}
});
