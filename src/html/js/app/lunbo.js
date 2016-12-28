  var imgs=document.getElementById("img-s");
		var lis  = document.querySelectorAll(".lis");
		var all = document.getElementById("lunbo");
		console.log(imgs);
			var timer3=null;
			var timer2 =null;
			var i = 0
			function ab(){
				  timer2 =setInterval(function(){
					i = i-1;
					if (i<=-300) {
						i = 0;
					}
				
					if (i%100==0) {
						num1++;
						if (num1>2) {
							num1=0;
						}
						bb(num1);
						clearInterval(timer2);
						timer3=setTimeout(function(){
							ab()
						}
							
						,2000);
					}
					imgs.style.marginLeft = i+"%"; 
				},30)
			}
			ab();
			var num1= 0;
			function bb(index){
				for(var i = 0; i<lis.length;i++){
					lis[i].style.background = "#ccc"; 
					}
					lis[index].style.background="red";
			}
			bb(num1);
////////////////////////////////////////////
var li1=document.querySelector("#li1");
var chu1=document.querySelector("#chu1");
var li2=document.querySelector("#li2");
var chu2=document.querySelector("#chu2");
var li3=document.querySelector("#li3");
var chu3=document.querySelector("#chu3");
var li4=document.querySelector("#li4");
var chu4=document.querySelector("#chu4");
li1.onmouseenter=function(){
	chu1.style.display="block";
	chu2.style.display="none";
	chu3.style.display="none";
	chu4.style.display="none";
};

chu1.onmouseleave=function(){
	chu1.style.display="none";
}
li2.onmouseenter=function(){
	chu2.style.display="block";
	chu1.style.display="none";
	chu3.style.display="none";
	chu4.style.display="none";
};

chu2.onmouseleave=function(){
	chu2.style.display="none";
}
li3.onmouseenter=function(){
	chu1.style.display="none";
	chu2.style.display="none";
	chu3.style.display="block";
	chu4.style.display="none";
};

chu3.onmouseleave=function(){
	chu3.style.display="none";
}
li4.onmouseenter=function(){
	chu1.style.display="none";
	chu2.style.display="none";
	chu3.style.display="none";
	chu4.style.display="block";
};

chu4.onmouseleave=function(){
	chu4.style.display="none";
}