
require.config({
	baseUrl:'js/lib',
	paths:{
		
		'dssy':'../app/dssy',
		'ajss':'../../dsajax/ajax'
	},
	shim:{
		'dssy':{
			exports:'aa'
		},
		'ajss':{
			exports:'ajs'
		}
	}
})

requirejs(['dssy','ajss'],function(aa,ajs){
	console.log(ajs)
	aa();
	ajs();

})