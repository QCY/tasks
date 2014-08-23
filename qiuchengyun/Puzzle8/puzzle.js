window.onload=function(){
	var score=0;
	$("#btn").click(function(){
    	$.get('puzzle_block.html',function(data){
			$('.content').html(data);
			score=0;
			$("#score").text(score);
			window.onload();
    	});
  	});
 	var a1=[];
 	for (var i=0;i<9;i++){
  		a1[i]=i;
 	}
 	var a2=[];
 	for (var i=0;i<9;i++){
  	a2.push(a1.splice(Math.floor(Math.random()*a1.length),1));
 	}
	var Div = new Array();
	var temp;
	var i;
	$(document).ready(function(){
  		Div = $(".content").find("div");
	});
	var pos = new Array("0px","100px","200px");
	var num=0;
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			$(Div[a2[num]]).css({"top":pos[i],"left":pos[j]});
			num=num+1;
		}
	}
	Div[0].onclick=function(){
		tansform(0);
	}
	Div[1].onclick=function(){
		tansform(1);
	}
	Div[2].onclick=function(){
		tansform(2);
	}
	Div[3].onclick=function(){
		tansform(3);
	}
	Div[4].onclick=function(){
		tansform(4);
	}
	Div[5].onclick=function(){
		tansform(5);
	}
	Div[6].onclick=function(){
		tansform(6);
	}
	Div[7].onclick=function(){
		tansform(7);
	}
	function tansform(i){
		score++;
		$("#score").text(score);
		var absL=Math.abs(Div[i].offsetLeft-Div[8].offsetLeft);
		var absT=Math.abs(Div[i].offsetTop-Div[8].offsetTop);
		if((Div[i].style.top==Div[8].style.top&&absL==100)||
			(Div[i].style.left==Div[8].style.left&&absT==100)){
			temp = Div[i].style.top;
			Div[i].style.top = Div[8].style.top;
			Div[8].style.top = temp;
			temp = Div[i].style.left;
			Div[i].style.left = Div[8].style.left;
			Div[8].style.left = temp;
			if(Div[0].style.top=="0px"&&Div[0].style.left=="0px"
			&&Div[1].style.top=="0px"&&Div[1].style.left=="100px"
			&&Div[2].style.top=="0px"&&Div[2].style.left=="200px"
			&&Div[3].style.top=="100px"&&Div[3].style.left=="0px"
			&&Div[4].style.top=="100px"&&Div[4].style.left=="100px"
			&&Div[5].style.top=="100px"&&Div[5].style.left=="200px"
			&&Div[6].style.top=="200px"&&Div[6].style.left=="0px"
			&&Div[7].style.top=="200px"&&Div[7].style.left=="100px"){
				alert("You Win!");
				score=0;
			}
		}
 	}
}