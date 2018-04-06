const gulp = require('gulp');
const sassc = require('dj-gulp-tasks/sassc');

const sasscConfig = {
    'watch': './style/scss',
    'paths': [
        './node_modules'
    ],
    'files': [
        {
            'entry': './style/scss/**/*.scss',
            'output': './style/css'
        }
    ]
};

/** Style tasks */
gulp.task('sassc-build', (cb) => sassc.compile(sasscConfig, cb));
gulp.task('sassc-watch', ['sassc-build'], () => {
    return sassc.watch(sasscConfig, () => gulp.start('sassc-build'));
});

gulp.task('build', ['sassc-build'])
gulp.task('watch', ['sassc-watch']);
gulp.task('default', ['watch']);