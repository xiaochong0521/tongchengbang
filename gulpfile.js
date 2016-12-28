var gulp=require('gulp');
var livereload=require('gulp-livereload');
var webserver=require('gulp-webserver');
/*var sass=require('gulp-ruby-sass');*/
var css = require('gulp-minify-css')

var uglify=require('gulp-uglify') ; //文件压缩模块
var imagemin=require('gulp-imagemin');
var pngquant=require('imagemin-pngquant')
// //注册任务
gulp.task('webserver',function(){
	gulp.src('dist/html').pipe(webserver({
		livereload:true,
		open:true
	}));
});
//把源目录的html文件输出到dist
gulp.task('html',function(){
	return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
	
});


gulp.task('images',function(){
	return gulp.src('src/**/*.{png,jpg,gif,scg}')
	.pipe(imagemin({
		progressive:true,//无损压缩
		svgoPlugins:[{removeViewBox:false}],
		use:[pngquant()]
	}))
	.pipe(gulp.dest('dist'));
})

gulp.task('css',function(){
	return gulp.src('src/**/*.css')
	.pipe(gulp.dest('dist'))
});


//js导出
gulp.task('ys',function(){
	return gulp.src('src/html/**/*.js').pipe(uglify({preserveComments:'some'}))
	
	.pipe(gulp.dest('dist/html'));
});

//监听任务
gulp.task('wath',function(){
	gulp.watch('*.sy');
});
gulp.task('default',['html','css','images','webserver','ys','wath']);