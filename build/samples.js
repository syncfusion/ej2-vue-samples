'use strict';

var gulp = global.gulp = global.gulp || require('gulp');
var config = { publishSamples: ["./**/*", "!./node_modules/**", "!./node_modules/", "!./samples-repo/**", "!./samples-repo/", "!./spec/**", "!./spec/", "!./test-report/**", "!./test-report/", "!Jenkinsfile", "!./production/**", "!./production/", "!./.gitignore", "!./!(system.config).{js,json}", "!./gulpfile.js", "!./tempFile", "!./**/*.{d.ts,md,markdown,txt,xml,scss,cmd,docx,tar,gz,zip,tgz,log}"] };
var gzip = require('gulp-gzip');
var shelljs = require('shelljs');
var cdn = require('./cdn.js');
var fs = require('fs');

/**
 * publish sample browser 
 */

function getReleaseVersion(version) {
    version = version.split('.');
    version.splice(2, 1);
    return version.join('.');
}

gulp.task('publish-samples', function(done) {
    var isMaster = process.env.BRANCH_NAME === 'master';
    var hotfixVersion;
    var isHotFix = /^((release\/|hotfix\/))/g.test(process.env.BRANCH_NAME);
    if (isHotFix) {
         hotfixVersion = process.env.BRANCH_NAME.split('/')[1].replace(/_.*/g, '');
    }
    var demoPath = isMaster ? './production/vue/demos' : './development/vue/demos';
    demoPath = isHotFix ? './hotfix/' + hotfixVersion + '/vue/demos' : demoPath;
    shelljs.mkdir('-p', demoPath);
    config.publishSamples.push('!' + demoPath + '/**', '!' + demoPath);
    var prefixName = demoPath.split('./')[1];
    var content = '<h1> 404 - Not Found </h1>';
    fs.writeFileSync('./error.html', content);
    if (fs.existsSync('./index.html') && !isHotFix) {
        var filecontent = fs.readFileSync('./index.html', 'utf8');
        var embedLink = 'https://syncfusion.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T' +
            '/tu9duo/b/c/7ebd7d8b8f8cafb14c7b0966803e5701/_/download/batch/' +
            'com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/' +
            'com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=b1db4791';
        var embedScript = '<script type="text/javascript" src="' + embedLink + '"></script>\n';
        filecontent = filecontent.replace('</head>', embedScript + '</head>');
        fs.writeFileSync('./index.html', filecontent);
    }
    if (fs.existsSync('./index.html') && isHotFix) {
        var indexcontent = fs.readFileSync('./index.html', 'utf8');
        var googleAnalytics = fs.readFileSync('./build/google-analytics', 'utf8');
        indexcontent = indexcontent.replace('</body>', googleAnalytics + '\n</body>');
        fs.writeFileSync('./index.html', indexcontent);
    }
    gulp.src(config.publishSamples)
        .pipe(gzip({ append: false }))
        .pipe(gulp.dest(demoPath))
        .on('end', function() {
            cdn.publish(demoPath, false, prefixName, done);
        })
        .on('error', function(e) {
            done(e);
        });
});

gulp.task('build-output', function() {
    var publishSample = config.publishSamples;
        gulp.src(publishSample)
        .pipe(gulp.dest('Vue'));      
});
