
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	path = require('path'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();
	
var coffeeSources = [
	'components/coffee/*.coffee'
];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true})
			.on( 'error', gutil.log))
		.pipe(gulp.dest('components/scripts'));
});

gulp.task('default', ['coffee']);