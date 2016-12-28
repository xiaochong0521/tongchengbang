var express = require('express');
var fs=require('fs')
var app = express();
//app.all('*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//  res.header("Content-Type", "application/json;charset=utf-8");
//  next();
//});
app.get("/data/:index",function(req,res){
req.header("content-type","application/json");
	var n=req.params.index;
	console.log("有人访问")
	fs.readFile('data/'+n+'.json',(err,data) =>{
		if(err){
			res.send("不存在")
		}else{
			res.send(data);
		}
	})
})
app.use(express.static('../dist/html'))
	app.listen(3500,function(){
    console.log('启动')
    }
	);