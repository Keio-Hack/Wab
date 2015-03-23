/* ここからテキストをセットするためのフォーム*/
 $(function(){
 	var set_text_form = document.forms.set_css.set_text;
 	set_text_form.onchange = function(event){
 		// alert(event.target.value);

 		target_on_whiteboard.innerHTML = event.target.value;

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


 		// alert("set_text_form.valueaaaf");
 		var set_text_form = document.forms.set_css.set_text;
 			set_text_form.value = "";
 			set_text_form.disabled = true;
 			target_on_whiteboard = null;


$(function(){
	var set_font_size_form = document.forms.set_css.set_font_size;
	set_font_size_form.onchange = function(event){
		target_on_whiteboard.querySelectorAll("p")[0].style.fontSize = event.target.value;
	}
	set_font_size_form.onclick = function(){
 	// alert("stopPropagation");
 	event.stopPropagation();
 	}
});