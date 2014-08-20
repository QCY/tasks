window.onload = function(){
	var show=document.getElementById("show");
	var input=document.getElementById("input");
	var val=document.getElementsByTagName("span");
	var i=0;
	var m=0;
	var j=0;
	var flag=0;
	var symbol=0;
	var num1=0;
	var num2=0;
	var result=0;

	val[0].onclick = function(){
		calculate("%");
	}
	val[1].onclick = function(){
		calculate("clear");
	}
	val[2].onclick = function(){
		calculate(7);
	}
	val[3].onclick = function(){
		calculate(8);
	}
	val[4].onclick = function(){
		calculate(9);
	}
	val[5].onclick = function(){
		calculate("/");
	}
	val[6].onclick = function(){
		calculate(4);
	}
	val[7].onclick = function(){
		calculate(5);
	}
	val[8].onclick = function(){
		calculate(6);
	}
	val[9].onclick = function(){
		calculate("*");
	}
	val[10].onclick = function(){
		calculate(1);
	}
	val[11].onclick = function(){
		calculate(2);
	}
	val[12].onclick = function(){
		calculate(3);
	}
	val[13].onclick = function(){
		calculate("-");
	}
	val[14].onclick = function(){
		calculate(0);
	}
	val[15].onclick = function(){
		calculate(".");
	}
	val[16].onclick = function(){
		calculate("=");
	}
	val[17].onclick = function(){
		calculate("+");
	}

	function calculate(ns){
		var group=new Array();
		group[i]=ns;
		if(group[i]=="clear"){
			show.innerHTML="";
			i=0;
			num="";
		}
		else if(group[i]=="+"){
			show.innerHTML="+";
			symbol="+";
			flag=1;
			m=0;
			j=0;
		}
		else if(group[i]=="-"){
			show.innerHTML="-";
			symbol="-";
			flag=1;
			m=0;
			j=0;
		}
		else if(group[i]=="*"){
			show.innerHTML="*";
			symbol="*";
			flag=1;
			m=0;
			j=0;
		}
		else if(group[i]=="/"){
			show.innerHTML="/";
			symbol="/";
			flag=1;
			m=0;
			j=0;
		}
		else if(group[i]=="%"){
			show.innerHTML=num1+"%";
			symbol="%";
		}
		else if(group[i]=="."){
			if(flag==0) {show.innerHTML=num1+".";}
			else {show.innerHTML=num2+".";}
			j=1;
		}
		else if(group[i]=="="){
			switch(symbol){
				case "+":result=num1+num2;break;
				case "-":result=num1-num2;break;
				case "*":result=num1*num2;break;
				case "/":result=num1/num2;break;
				case "%":result=num1/100;break;
				default:break;
			}
			show.innerHTML=result;
			i=0;
			j=0;
			m=0;
			flag=0;
			symbol=0;
			group=0;
			num1=0;
			num2=0;
		}
		else{
			switch(flag){
				case 0:if(j==0){
					num1=num1*10+group[i];
					show.innerHTML=num1;break;
				}else{
					m=m+1;
					num1=num1+group[i]/Math.pow(10,m);
					show.innerHTML=num1;break;
				}
				case 1:if(j==0){
					num2=num2*10+group[i];
					show.innerHTML=num2;break;
				}else{
					m=m+1;
					num2=num2+group[i]/Math.pow(10,m);
					show.innerHTML=num2;break;
				}
				default:break;
			}
		}
		i++;
	}
}