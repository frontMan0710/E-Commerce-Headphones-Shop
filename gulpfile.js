const gulp = require('gulp');
const ghPages = require('gh-pages')
const path = require('path');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);
gulp.task('deploy', function (done) {
	ghPages.publish(path.join(process.cwd(), './build'), function (err) {
		if (err) {
			console.error('Deploy failed:', err);
		} else {
			console.log('Deploy successful!');
		}
		done();
	});
});