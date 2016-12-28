
require.config({
	baseUrl:'js/lib',
	paths:{
		
		'dssy':'../app/dssy'
		
	},
	shim:{
		'dssy':{
			exports:'aa'
		}
	
	}
})
console.log(1224)
requirejs(['dssy'],function(aa){
	console.log(aa);
	aa();
	

})