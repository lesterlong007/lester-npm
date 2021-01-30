/**
 * Created by Lester on 2021/1/30
 */

const gulp = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const LIB_PATH = "./lib";
const CONTENT_PATH = "./src/content";

gulp.task('clean', function () {
    return del([
        LIB_PATH
    ])
});

gulp.task('copy', function () {
    return gulp
        .src(["package.json", "README.md", `${CONTENT_PATH}/**.md`])
        .pipe(gulp.dest(LIB_PATH));
});

gulp.task('default', gulp.series('clean', 'copy', function () {
    return tsProject
        .src()
        .pipe(tsProject())
        // .js
        .pipe(gulp.dest(LIB_PATH));
}));