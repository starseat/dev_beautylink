const gulp = require('gulp')
const browserSync = require('browser-sync').create();
// const validator = require('gulp-w3c-html-validation');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
// const spritesmith = require('gulp.spritesmith');
// const merge = require('merge-stream');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const del = require('del');
const fileinclude = require("gulp-file-include");
const concat = require("gulp-concat");

const server = () => {  
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
};

// const html = () => {
//   return gulp
//     .src(["src/**/*.html","!src/index.html"])
//     .pipe(validator({ generateReport: true }))
//     .pipe(gulp.dest("dist"));
// };

const json = () => {
  return gulp
    .src(["src/data/**"])    
    .pipe(gulp.dest('./dist/data'))    
};

const include = () => {
  return gulp
    .src(["src/**/*.html", "!src/include/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist")); 
};

const js = () => {
  return (
    gulp
      .src(["src/js/**/*.js", "!src/js/plugin/*.js"])
      // .pipe(sourcemaps.init())
      // .pipe(uglify())      
      // .pipe(sourcemaps.write("./", { addComment: true }))
      .pipe(gulp.dest("dist/js"))
  );
};

const jsPlugin = () => {
  return (
    gulp
      .src("src/js/plugin/*.js")      
      .pipe(uglify())
      // .pipe(sourcemaps.write())
      // .pipe(sourcemaps.write("./", { addComment: true }))
      .pipe(gulp.dest("dist/js/plugin"))
  );
};




// const css = () => {
//   return (
//     gulp
//       .src("src/css/**/*.css")
//       .pipe(sourcemaps.init())
//       .pipe(postcss([autoprefixer(), cssnano()]))
//       .pipe(concat("style.min.css"))
//       // .pipe(sourcemaps.write())
//       .pipe(sourcemaps.write("./", { addComment: true }))
//       .pipe(gulp.dest("dist/css"))
//       .pipe(browserSync.reload({ stream: true }))
//   );
// }

const scss = () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }))  
    .pipe(postcss([
      autoprefixer()
    ]))
    // .pipe(sourcemaps.write("./", { addComment: true }))
    .pipe(gulp.dest('dist/css'))
}

const scss_min = () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))  //compact, compressed
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(concat('beauty.min.css'))
    .pipe(sourcemaps.write("./", { addComment: true }))    
    .pipe(gulp.dest('dist/css'))    
}

const font = () => {
  return gulp.src('main/webapp/fonts/**')
    .pipe(gulp.dest('main/webapp/dist/fonts'))
}

// const sprite = () => {
//   const spriteData = gulp.src('src/images/sprite/*.{jpg,png,gif}')
//     .pipe(spritesmith({
//       imgName: 'sprite.png',
//       cssName: 'sprite.css',
//       imgPath: '../images/sprite.png',
//       padding: 8,
//     }));

//   const imgStream = spriteData.img
//     .pipe(gulp.dest('dist/images'))

//   const cssStream = spriteData.css
//     .pipe(gulp.dest('dist/css/'))

//   return merge(imgStream, cssStream);
// }

const image = () => {
  return gulp.src(
    [
      'src/images/**/*.{jpg,png,gif}',
      '!src/images/sprite/**'
    ],
    { since: gulp.lastRun(image) }
  ).pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}

const watchTask = () => {
  // gulp.watch('src/**/*.html', html)
  //   .on('change', browserSync.reload)
  
  gulp.watch('src/data/**', json).on('change', browserSync.reload)
  gulp.watch('src/**/*.html', include)
    .on('change', browserSync.reload)
  // gulp.watch('src/css/**/*.css', css)
  //   .on('change', browserSync.reload)
  gulp.watch('src/sass/**/*.scss', scss_min)
    .on('change', browserSync.reload)
  gulp.watch([
    'src/images/**/*.{jpg,png,gif}',
    '!src/images/sprite/**'
  ], image)
    .on('change', browserSync.reload)
  // gulp.watch('src/images/sprite/*.{jpg,png,gif}', sprite)
  //   .on('change', browserSync.reload)
  gulp.watch('src/js/**/*.js', js).on('change', browserSync.reload)
  gulp.watch("src/**/*.html", include).on("change", browserSync.reload); 
  gulp.watch('src/js/plugin/*.js', jsPlugin).on('change', browserSync.reload) 
  gulp.watch("src/**/*.html", include).on("change", browserSync.reload);
}

const clean = () => {
  return del('dist');
}

exports.default = gulp.series(
  gulp.parallel(json, scss, scss_min, image, js, jsPlugin,  include),
  gulp.parallel(server, watchTask)
);
exports.build = gulp.series(
  clean,
  gulp.parallel(json, scss, scss_min, image, js, jsPlugin,  include)
);
