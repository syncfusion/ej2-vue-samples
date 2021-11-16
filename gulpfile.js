const fs = require('fs');
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
var jsoncombine = require('gulp-jsoncombine');
var config = require('./config.json')
var sampleOrder = JSON.parse(fs.readFileSync(__dirname + '/src/common/sampleorder.json'));
var sampleList;
const elasticlunr = require('elasticlunr');
var shelljs = require('shelljs');
require('./build/samples');

function generateSearchIndex(sampleArray) {
    elasticlunr.clearStopWords();
    var instance = elasticlunr(function() {
        this.addField('component');
        this.addField('name');
        this.setRef('uid');
    });
    for (sampleCollection of sampleArray) {

        var component = sampleCollection.name;
        var directory = sampleCollection.directory;
        var puid = sampleCollection.uid;
        var hideOnDevice = sampleCollection.hideOnDevice;
        for (sample of sampleCollection.samples) {
            sample.component = component;
            sample.dir = directory;
            sample.parentId = puid;
            sample.hideOnDevice = hideOnDevice;
            instance.addDoc(sample);
        }
    }
    fs.writeFileSync('./src/common/search-index.json', JSON.stringify(instance.toJSON()));

}

function getSamples(data, component) {
    var dataList = Object.keys(data);
    for (var i = 0; i < dataList.length; i++) {
        var currentData = data[dataList[i]];
        if (component === currentData.name) {
            return currentData;
        }
    }
}

function getControls() {
    var controlList = sampleList;
    var controls = controlList.split(',');
    for (var i = 0; i < controls.length; i++) {
        controls[i] = controls[i].replace(/^\s*/, '').replace(/\s*$/, '');
    }
    return controls;
}

function getSampleOrder(controls) {
    var controlWiseSampleOrder = {};
    var orderKeys = Object.keys(sampleOrder);
    for (var i = 0; i < orderKeys.length; i++) {
        var keys = orderKeys[i];
        //get the controlslist 
        var components = sampleOrder[keys];
        for (j = 0; j < controls.length; j++) {
            // get the index of controls 
            var componentIndex = components.indexOf(controls[j]);
            if (componentIndex != -1) {
                if (!controlWiseSampleOrder[keys]) {
                    controlWiseSampleOrder[keys] = [components[componentIndex]];
                } else {
                    controlWiseSampleOrder[keys].push(components[componentIndex]);
                }
            }
        }
    }
    return controlWiseSampleOrder;
}

if (fs.existsSync('./controlWiseSamples.json')) {
    sampleList = JSON.parse(fs.readFileSync('./controlWiseSample.json'));
}

gulp.task('sample-json', gulp.series(function() {
    if (sampleList && sampleList.length) {
        var controls = getControls();
        var samplejson = glob.sync('./src/**/sample.json', { silent: true });
        var obj = [];
        for (var i = 0; i < samplejson.length; i++) {
            var samplejsonList = JSON.parse(fs.readFileSync(samplejson[i]));
            var componentIndex = controls.indexOf(samplejsonList.name);
            if (componentIndex != -1) {
                obj.push(samplejsonList.directory);
            }
        }
        fs.writeFileSync('./samplelist.json', JSON.stringify(obj));
    }
}))

gulp.task('combine-samplelist', gulp.series(function() {
    var apiReference = {};
    if (sampleList && sampleList.length) {
        var controls = getControls();
        sampleOrder = getSampleOrder(controls);
    }
   return gulp.src(config.samplejson)
        .pipe(jsoncombine('samplelist.ts', function(data) {
            var result = [];
            var subCategory = [];
            var intId = 0;
            var addUID = function(pid, dt) {
                for (var i = 0; i < dt.length; i++) {
                    dt[i].uid = pid + i;
                    if (dt[i].hasOwnProperty('samples')) {
                        curDirectory = dt[i].directory;
                        subCategory = [];
                        addUID('00' + intId + i, dt[i].samples);
                        intId++;
                    } else {
                        var index = subCategory.indexOf(dt[i].category);
                        if (index !== -1) {
                            dt[i].order = index;
                        } else {
                            subCategory.push(dt[i].category);
                            dt[i].order = subCategory.length - 1;
                        }
                    }
                }
            }
            var orderKeys = Object.keys(sampleOrder);
            for (var i = 0; i < orderKeys.length; i++) {
                var components = sampleOrder[orderKeys[i]];
                for (var j = 0; j < components.length; j++) {
                    var currentData = getSamples(data, components[j]);
                    currentData['order'] = i;
                    result.push(currentData);
                }
            }
            addUID("0", result);
            generateSearchIndex(result);
            var configProps = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
            var commonChunkSkip = configProps.cssComponent || [];
            return new Buffer('export let samplesList : any =' + JSON.stringify(result) + ';\n\n' + 'export let apiList:any=' + JSON.stringify(apiReference) + '\n\n export let skipCommonChunk: string[] = ' + JSON.stringify(commonChunkSkip) + ';');
        }))
        .pipe(gulp.dest('./src/common/'));
}));

gulp.task('generate-routes', gulp.series(function(done) {
    var jsonFiles = glob.sync('./src/**/sample.json');
    var imports = '',
        routs = ["{path: '/', redirect: '/material/grid/grid-overview'}"];
    jsonFiles.forEach(file => {
        var curJson = require(file);
        curJson.samples.forEach(curSample => {
            var path = curJson.directory + '/' + curSample.url;
            var aData = {}
            imports = imports + 'import ' + curJson.name.split(' ').join('') + curSample.url.split('-').join('') + ' from \'./' + path + '.vue\'; \n';
            aData["eCompName"] = curJson.name;
            aData["eSampleName"] = curSample.name;
            aData["eCategoryName"] = curSample.category;
            routs.push('{ path: \'/:theme/' + path + '.html\', component: ' + curJson.name.split(' ').join('') + curSample.url.split('-').join('') + ', meta: ' + JSON.stringify(aData) + ' }\n');
        });
    });
    fs.writeFileSync("./src/router.config.ts", imports + 'export default [' + routs + '];');
    done();
}));

/* copy styles from nodemodules */
gulp.task('copy', gulp.series(function (done) {
     var files=glob.sync('./node_modules/@syncfusion/ej2/*.css')
     files.forEach(file=>
     {  
        shelljs.cp(file,'./public/styles');    
     })
     done();
}));

gulp.task('copy-source', gulp.series(function (done) {
    var localeJson = glob.sync(__dirname + '/src/**/*', {
      silent: true,
      ignore: ['/src/common/**/', '/src/common']
    });
    if (localeJson.length) {
      for (var i = 0; i < localeJson.length; i++) {
        if (localeJson[i].indexOf('/common') == -1) {
          console.log(localeJson[i])
          shelljs.cp('-R', localeJson[i], localeJson[i].replace('src', 'public/source'));
        }
      }
    }
    done();
  })); 

gulp.task('src-ship', gulp.series(function (done) {
    var indexFile = fs.readFileSync('./dist/index.html','utf8');
    indexFile = indexFile.replace(/\"\/app.js\"/g, `"./app.js"`);
    fs.writeFileSync('./dist/index.html', indexFile, 'utf8');
    shelljs.cp('-rf', ['./public', './**.config.js', './**.json', './src', './samples', './manifest.Webmanifest', './**.xml'], './dist/');
    done();
}));

gulp.task('build', gulp.series(function(done) {
    shelljs.exec('gulp combine-samplelist && gulp generate-routes && gulp copy && gulp copy-source, done)
}));

gulp.task('serve',gulp.series('build', function(done) {
    const serve = require('serve')
    const server = serve(__dirname + '/dist', {
        port: 3000,
        ignore: ['node_modules']
    })
    done();
}));

gulp.task('ci-report', gulp.series(function(done)
{
    done();
}));

// Install log task.
gulp.task('ls-log', gulp.series(function () {
    shelljs.mkdir('-p', './cireports/logs');
    shelljs.exec('npm ls >./cireports/logs/install.log');
}));
