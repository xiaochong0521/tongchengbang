var inputs=document.getElementById("input1"),uls=document.getElementById("xiala");window.suggest=function(t){console.log(t);var e=t.result;uls.style.display="block";for(var n=0;n<e.length;n++){var o=document.createElement("li");o.innerHTML=e[n].word,console.log(e[n].word),uls.appendChild(o)}},inputs.oninput=function(){var t=document.createElement("script");t.setAttribute("src","http://suggest.bang.360.cn/suggest?word="+inputs.value+"&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852"),document.body.appendChild(t)},inputs.onblur=function(){uls.style.display="none"};