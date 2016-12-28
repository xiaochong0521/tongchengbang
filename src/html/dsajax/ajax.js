var baseURL="http://localhost:3500/data/1";
var xhr =new XMLHttpRequest();
xhr.open('GET',baseURL);
xhr.setRequestHeader("content-type","application/json");
xhr.send(null);
var x=[];
var y=[];
xhr.onreadystatechange = function(){
	if(this.readyState==4){
		if(this.status==200||this.status==304){
			var data1 = JSON.parse(xhr.responseText)
			var data=data1.shop_data
				/*console.log(22);*/
				var uls =document.getElementById("shang");
				console.log(uls)
				console.log(data)
				for(var i=0;i<data.length;i++){
					x.push(data[i].map_longitude);
					y.push(data[i].map_latitude);
					var props=["shop_ico","shop_name","main","addr_detail"];
					console.log(props[0]);
					var li=document.createElement("li");
					var div1=document.createElement("div");
					div1.setAttribute("class","dpt");
					var imgs=document.createElement("img");
					imgs.src=data[i][props[0]];
					div1.appendChild(imgs);
					li.appendChild(div1)
					//图片处理结束
					var div2=document.createElement("div");
					var p1=document.createElement("p");
					p1.setAttribute("class","sd-p");
					var a=document.createElement("a");
					a.innerHTML=data[i][props[1]];
					var span1=document.createElement("span");
					span1.innerHTML="先行赔付";
					p1.appendChild(a);
					p1.appendChild(span1);
					div2.appendChild(p1);
					//p1结束
					var p2=document.createElement("p");
					p2.setAttribute("class","sd-p");
					p2.innerHTML=data[i][props[2]];
					var span2=document.createElement("span");
					span2.innerHTML="同城认证";
					p2.appendChild(span2);
					div2.appendChild(p2);
					//p2结束
					var p3=document.createElement("p");
					p3.setAttribute("class","sd-p");
					p3.innerHTML=data[i][props[3]];
					var span3=document.createElement("span");
					span3.innerHTML="人气浏览1026次";
					p3.appendChild(span3);
					div2.appendChild(p3);
					li.appendChild(div2);
					/*div2结束*/
					var div3=document.createElement("div");
					div3.innerHTML="进入地图"
					div3.setAttribute("class","jinru");
					li.appendChild(div3);
					/*div3结束*/
					uls.appendChild(li);
				/////	
				}
			
				/////////
//地图标记
function init(data,props){
	
        var map = new AMap.Map('container', {
            center: [116.480983, 39.989628],
            zoom: 11
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });

        for(var k=0;k<x.length;k++){
        var props1=["shop_ico","shop_name","main","addr_detail"]
			    /////坐标气球
        	var marker = new AMap.Marker({
			    position: [x[k], y[k]],
			    map:map
			});
        	//坐标注释
        	 var content = document.createElement('div');
        	  var content1 = document.createElement('div');
        	  
        	     content1.innerHTML = data[k][props1[1]];
        	     content1.style.color="red";

        	   content1.setAttribute("class","content1");
        	    content1.style.width=100+"px";
        	     content1.style.height=26+"px";
        		 content.setAttribute("class","content");
        		   content.style.width=100+"px";  
        		    content.style.color="yellow";    	     
        	     content.style.background="#ccc";
			    content.innerHTML = data[k][props1[2]];
			    content.className = 'content';
			 
			 content1.appendChild(content);
			    marker = new AMap.Marker({
			    content: content1,
			    position: [x[k], y[k]],
			    
			    offset: new AMap.Pixel(10,-10),
			    map: map
			});






        }
       

    }
    init(data,props);

//地图标记结束
		//////////////////		
		}
	}
}

//设置地图
var btn=document.getElementById("dt1");
var dtms=document.getElementById("dtms");
var gdt=document.getElementById("gdt");
dt1.onclick=function(){
	dtms.style.display="block";
}
gdt.onclick=function(){
	dtms.style.display="none";
}
