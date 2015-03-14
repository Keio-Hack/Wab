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
 $(function(){
 	var body = document.body;
 	body.onclick = function(event){
 		// alert("set_text_form.valueaaaf");
 		var set_text_form = document.forms.set_css.set_text;
 			set_text_form.value = "";
 			set_text_form.disabled = true;
 			target_on_whiteboard = null;

 	}
 });