const fs = global.fs = global.fs || require('fs');
const glob = global.glob = global.glob || require('glob');
const gulp = global.gulp = global.gulp || require('gulp');
const path = global.path = global.path || require('path');
var jsoncombine = require('gulp-jsoncombine');
var config = require('./config.json');
var sampleOrder = JSON.parse(fs.readFileSync(__dirname + '/src/common/sampleorder.json'));
var sampleList;
const elasticlunr = require('elasticlunr');
var shelljs = global.shelljs = global.shelljs || require('shelljs');
var name = JSON.parse(fs.readFileSync('./package.json')).name.replace(`@syncfusion/`,'');

process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = '1';

var platforms = {
    "ej2-vue-samples": {
        "cssPath": "./public/styles"
    }
}
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
            sample.hideOnDevice = hideOnDevice ? hideOnDevice : sample.hideOnDevice;
            instance.addDoc(sample);
        }
    }
    fs.writeFileSync('./src/common/search-index.json', JSON.stringify(instance.toJSON()));
}

function getSamples(data, component, category) {
    var dataList = Object.keys(data);
    for (var i = 0; i < dataList.length; i++) {
        var currentData = data[dataList[i]];
        if (component === currentData.name && category === currentData.category) {
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

gulp.task('ship-search-file', function (done) {
    console.log('ship-search-file');
});
gulp.task('sample-json', function(done) {
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
    done();
});

gulp.task('combine-samplelist', function() {
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
                let category = orderKeys[i];
                for (var j = 0; j < components.length; j++) {
                    var currentData = getSamples(data, components[j], category);
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
});
    
gulp.task('generate-routes', function(done) {
    var jsonFiles = glob.sync('./src/**/sample.json');
    var imports = '',
    routs = ["{path: '/', redirect: '/bootstrap5/grid/grid-overview'}"];
    jsonFiles.forEach(file => {
        var curJson = require(__dirname + '/' + file);
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
});

gulp.task('copy-source', function (done) {
    var controls = glob.sync('./src/*', {
        ignore: ['/src/common/**/', '/src/common']
    });
    for (var i = 0; i < controls.length; i++) {
        shelljs.cp('-rf', controls[i], controls[i].replace('src', 'public/src'));
    }
    done();
});

gulp.task('build', function(done) {
    shelljs.exec('gulp remove-labels && gulp combine-samplelist && gulp generate-routes && gulp styles-ship && gulp copy-source && gulp src-ship', done)
});

gulp.task('src-ship', function (done) {
    shelljs.cp('-rf', ['./public', './**.config.js', './Syncfusion_License.js', './**.json', './newWindowSamples/*', './src', './samples', './manifest.Webmanifest', './**.xml'], './dist/');
    done();
});

/* copy styles from nodemodules */
gulp.task('styles-ship', function (done) {
    var files=glob.sync('node_modules/@syncfusion/ej2/*.css');
     files.forEach(file=>
     {  
        shelljs.cp(file,platforms[name].cssPath);   
     })
     done();
});

function processFile(filePath, replacementRules) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        for (const [search, replace] of replacementRules) {
            if (content.includes(search)) {
                content = content.replace(search, replace);
            }
        }
        fs.writeFileSync(filePath, content);
    }
}

// Remove stackBlitz and newWindow labels from the application
gulp.task('remove-labels', function(done) {
    fs.rename('./public/source', './public/src', (err) => {
        if (err) { console.log(`Error renaming file: ${err}`); }
    });
    const indexHtmlPath = './public/index.html';
    const appVuePath = './src/App.vue';

    const indexHtmlReplacementRules = [
        ["<!-- Google Tag Manager -->", "<style>.hide-labels { display: none; }</style>\n\t\t<!-- Google Tag Manager -->"]
    ];

    const appVueReplacementRules = [
        ["sb-custom-item sb-open-new-wrapper", "sb-custom-item sb-open-new-wrapper hide-labels"],
        ["sb-custom-item sb-plnr-section", "sb-custom-item sb-plnr-section hide-labels"],
        ["+ hsplitter + openNewTemplate", "+ openNewTemplate"]
    ];

    processFile(indexHtmlPath, indexHtmlReplacementRules);
    processFile(appVuePath, appVueReplacementRules);

    done();
});

gulp.task('serve', gulp.series('build', function(done) {
    shelljs.exec('node --max_old_space_size=8192 node_modules/@vue/cli-service/bin/vue-cli-service.js serve', done);
}));

