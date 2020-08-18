var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById('grad')
function setgradient(){
 body.style.background= 
 "linear-gradient(to right,"
 +color1.value
 + "," +
 color2.value+")";

}


color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);


//click button 
function clickMe(){
	var num1=Math.random()*1000;
	var num2=Math.random()*1000;
	var num3=Math.random()*1000;
	var num4=Math.random()*1000;
	var num5=Math.random()*1000;
	var num6=Math.random()*1000;
	num6=Math.floor(num6);
	num5=Math.floor(num5);
	num4=Math.floor(num4);
	num3=Math.floor(num3);
	num2=Math.floor(num2);
	num1=Math.floor(num1);
	if (num1<=255 && num2<=255 && num3<=255) {
		body.style.background="linear-gradient(to right,"
        + "rgb("+num1+","+num2+","+num3+")"+","
        +  "rgb("+num4+","+num5+","+num6+")"
	}
	else{
		clickMe()
	}


}
var button= document.querySelector(".butt1");
button.addEventListener("click", clickMe);
