var head = document.querySelectorAll(".head a");
var good = document.querySelector(".user_good");
var user1 = document.querySelector(".user_evu");
var user2 = document.querySelector(".user_shop");
var user3 = document.querySelector(".user_service");
head[0].onclick = function(){
	good.style.display = "block";
	user1.style.display = "block";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[1].onclick = function(){
	good.style.display = "none";
	user1.style.display = "block";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[2].onclick = function(){
	good.style.display = "none";
	user1.style.display = "none";
	user2.style.display = "block";
	user3.style.display = "block";
}
head[3].onclick = function(){
	good.style.display = "none";
	user1.style.display = "none";
	user2.style.display = "none";
	user3.style.display = "block";
}
var inputs = document.querySelector(".txt");
var uls = document.querySelector(".uls");

window.suggest=function(data){
	var datas = data["result"]
	uls.style.display = "block";
	for (var x = 0;x < datas.length;x++) {
		var li = document.createElement("li");
		li.innerHTML = datas[x]['word'];	
		uls.appendChild(li);
	}
	
}
inputs.oninput = function(){
	var dom = document.createElement("script");
	dom.setAttribute("src","http://suggest.bang.360.cn/suggest?word="+inputs.value+"&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852");
			
	document.body.appendChild(dom);
}
inputs.onblur = function(){
	uls.style.display = "none";
}




