
// ここからmenuvarの出し入れ

var count = 0;
var countright = 0;

$(function(){
	$('#menu').on("click",function(){
		if (count===0) {

			$('#title,#html_tag,#white_editor,#css_tag,img').stop(true).animate({
				opacity:"0"
			},
			200
			);
			$('#menuvar').stop(true).animate({
				left:"-10%",
				opacity:"1"
			},
			200
			);
			
			count=1;
			countcenter = countcenter+3;
			countleft = countleft+3;
		}else if(count===1){
			

			$('#title,#html_tag,#white_editor,#css_tag,img').stop(true).animate({
				opacity:"1"
			},
			200
			);

			$('#menuvar').stop(true).animate({
				left:"-170%",
				opacity:"0"
			},
			600
			);
			count=0;
			countcenter = countcenter-3;
			countleft = countleft-3;
	};
	});
});

// ここまでmenivarの出し入れ




// ここからeditorの出し入れ

var countcenter = 0;

$(function(){
	$('#clickcenter').on("click",function(){
		if (countcenter ===0) {
			$('#editor').stop(true).animate({
				height:"0px"
			},
			300
			);
			$('#whiteboard').stop(true).animate({
				height:"1080px"
			},
			600
			);
			countcenter=1;

		}else if(countcenter === 1){
			$('#editor').stop(true).animate({
				height:"230px"
			},
			300
			);
			$('#whiteboard').stop(true).animate({
				height:""
			},
			600
			);
			countcenter=0;
		};
	});
});



// ここまでeditorの出し入れ





// ここからhtml_tagの出し入れ

var countleft = 0;
var a = 0;


$(function(){
	$('#clickleft').on("click",function(){
		if(countleft === 3){
			// ここにmenuvar の時の処理
		}else if(countleft >= 10){
			// css_tag　の時の処理
			if(a==0){
				$('#html_tag').stop(true).animate({
					width:"0",
					opacity:0
				},
				300
				);
				$('#white_editor,#white_board,#editor').stop(true).animate({
					width:"2000px"
				},
				300
				);
				a=1;
			}else{
				$('#html_tag').stop(true).animate({
					width:"230%",
					opacity:1
				},
				300
				);
				$('#white_editor').stop(true).animate({
					width:"900px"
				},
				300
				);
				a=0;
			};
		}else{
			// 普通の処理
			if(a===0){
				$('#html_tag').stop(true).animate({
					width:"0px",
					opacity:0
				},
				300
				);
				$('#white_editor').stop(true).animate({
					width:"1450px"
				},
				300
				);
				a=1;
			}else{
				$('#html_tag').stop(true).animate({
					width:"230%",
					opacity:1
				},
				300
				);
				$('#white_editor').stop(true).animate({
					width:"1220px",
					margin:"0 auto"
				},
				300
				);
				a=0;
			};
		};
	});
});
// ここまでhtml_tagの出し入れ

// ここからcss_tagの出し入れ

var countleft = 0;
var b = 0;


$(function(){
	$('#clickright ').on("click",function(){
		if(countleft === 3){
			// ここにmenuvar の時の処理
		}else if(countleft >= 10){
			// css_tag　の時の処理
		}else{
			if(b===0){
			$('#css_tag').stop(true).animate({
				width:"0px",
				opacity:"0"
			},
			300
			);
			b=1;
			countright = countright-10;
		}else{
			$('#css_tag').stop(true).animate({
				width:"240%",
				opacity:"1"
			},
			300
			);
			b=0;
			countright=countright+10;
		};

			// 普通の処理

		};
	});
});

// ここまでcss_tagの出し入れ





