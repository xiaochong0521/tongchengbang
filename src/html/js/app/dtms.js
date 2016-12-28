var btn=document.getElementById("dt1");
var dtms=document.getElementById("dtms");
var gdt=document.getElementById("gdt");
dt1.onclick=function(){
	dtms.style.display="block";
}
gdt.onclick=function(){
	dtms.style.display="none";
}
//设置地图
	var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:11,
    center: [116.397428, 39.90923]       
});