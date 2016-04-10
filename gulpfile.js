var gulp = require('gulp'),
	csso = require('gulp-csso'),
	imagemin = require('gulp-imagemin'),
	imageminJpegtrtan = require('imagemin-jpegtran'),
	imageminPngquant = require('imagemin-pngquant'),
	imageop = require('gulp-image-optimization'),
	uglyfly = require('gulp-uglyfly'),
	htmlmin = require('gulp-htmlmin')
	imageResize = require('gulp-image-resize');

gulp.task('resize', function () {
  gulp.src('src/views/images/pizzeria.jpg')
    .pipe(imageResize({
      width : 360,
      height : 270,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist/views/images'));
});

gulp.task('images', function(cb) {
    gulp.src(['src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist')).on('end', cb).on('error', cb);
});

gulp.task('compress', function() {
  gulp.src('src/**/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('dist'));
});


gulp.task('pngs', function(){
	return gulp.src('src/**/*.png')
	.pipe(imageminPngquant({quality: '65-80', speed: 4})())
	.pipe(gulp.dest('dist'));
})

gulp.task('jpgs', function() {
	return gulp.src('src/**/*.jpg')
	.pipe(imageminJpegtrtan({ progresive: true,})())
	.pipe(gulp.dest('dist'));
});


gulp.task('csso', function() {
	return gulp.src('src/**/*.css')
		.pipe(csso())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
	gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
	return gulp.src('src/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));
});

gulp.task('default',['csso', 'resize','compress','minify']);