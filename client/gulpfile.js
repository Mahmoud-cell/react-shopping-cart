/* هنا هنبدأ نستخدم الليلة دي عندي في المشروع بتاعنا وهنسيب الحتة اللي اتعلمنا فيها اسايات للجلب */
/*

ايرورز:
1-
*/
/* ********##_1_##******** */
const  gulp = require('gulp');
const  gulpSass = require('gulp-sass');
const  sass = gulpSass(require('sass'));


gulp.task('sass', async function(){
    gulp.src('src/*.scss').pipe(sass())
    .pipe(gulp.dest('src/css'))
})

 