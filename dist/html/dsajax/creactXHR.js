function createXHR(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject){if("string"!=typeof arguments.callee.activeXString)for(var t=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],e=0;e<t.length;e++)try{new ActiveXObject(t[e]),arguments.callee.activeXString=t[e]}catch(t){}return new ActiveXObject(arguments.callee.activeXString)}throw new Error("没法正常的创建ajax对象")}