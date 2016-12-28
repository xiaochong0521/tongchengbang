
	var inputs=document.getElementById('input1')
	var uls=document.getElementById('xiala')
	window.suggest=function(data){
		console.log(data)
	var da1 = data["result"]
	uls.style.display = "block";
	for (var x = 0;x < da1.length;x++) {
		var li = document.createElement("li");
		li.innerHTML = da1[x]['word'];
		console.log(da1[x]['word']);
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




