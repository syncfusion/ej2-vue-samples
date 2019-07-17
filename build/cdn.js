'use strict';

var config = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
};
var s3 = require('gulp-s3-upload')(config);
var gulp = global.gulp = global.gulp || require('gulp');

var publish = function(dirName, ispublic, prefixName, done) {
    prefixName = prefixName.endsWith('/') ? prefixName : prefixName + '/';
    dirName = dirName.endsWith('/') ? dirName : dirName + '/';
    gulp.src(dirName + '**', { buffer: false })
        .pipe(s3({
            Bucket: ispublic ? process.env.AWS_PUBLIC_BUCKET : process.env.AWS_STAGING_BUCKET,
            ACL: 'public-read',
            uploadNewFilesOnly: false,
            ContentEncoding: 'gzip',
            keyTransform: function(relative_filename) {
                var new_name = prefixName + relative_filename;
                return new_name;
            }
        }, {
            maxRetries: 5,
            maxRedirects: 100,
            retryDelayOptions: {
                base: 1000
            }
        }))
        .on('end', function() {
            console.log('Published in CDN');
            done();
        })
        .on('error', function(e) {
            console.error('unable to sync: ', e.stack);
            done(e);
        });
};
exports.publish = publish;