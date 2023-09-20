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

require('./build/samples');

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

gulp.task('open-new-license', function (done) {
    var newWindowSamples = glob.sync('./newWindowSamples/**/**/index.html');
    const googleTag = `<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W8WD8WN');</script>
    <!-- End Google Tag Manager -->` ;
    const noScriptTag = `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8WD8WN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;  
  
    const googleTagRegEx = /<!-- Google Tag Manager -->([\s\S]*?)<!-- End Google Tag Manager -->/g;
    const gTagNoScriptRegEx = /<!-- Google Tag Manager \(noscript\) -->([\s\S]*?)<!-- End Google Tag Manager \(noscript\) -->/g;
    const noScriptRegEx = /<noscript>([\s\S]*?)<\/noscript>/g;
    
    for (var i = 0; i < newWindowSamples.length; i++) {
        var indexFile = fs.readFileSync(newWindowSamples[i], 'utf8');
        indexFile = indexFile.replace(/<head>/, `<head>
        <script>function _0xde02(){var _0x5f2ba3=['9TYJyPJ','8519130vccODC','length','indexOf','642676nYqdEN','split','1588446jBtanR','1207348wihLFo','204856gJKXOd','1996386mrrBRO','7202905WqbCdL','href','ej2.syncfusion.com','36VGEwVI'];_0xde02=function(){return _0x5f2ba3;};return _0xde02();}var _0x5c03ce=_0x2e99;(function(_0x4610ba,_0x2edf38){var _0x2bab05=_0x2e99,_0x295339=_0x4610ba();while(!![]){try{var _0x258b1a=parseInt(_0x2bab05(0xd5))/0x1+-parseInt(_0x2bab05(0xd7))/0x2+parseInt(_0x2bab05(0xd1))/0x3*(parseInt(_0x2bab05(0xd8))/0x4)+-parseInt(_0x2bab05(0xdb))/0x5+parseInt(_0x2bab05(0xd2))/0x6+parseInt(_0x2bab05(0xda))/0x7+-parseInt(_0x2bab05(0xd9))/0x8*(parseInt(_0x2bab05(0xd0))/0x9);if(_0x258b1a===_0x2edf38)break;else _0x295339['push'](_0x295339['shift']());}catch(_0x5cb54d){_0x295339['push'](_0x295339['shift']());}}}(_0xde02,0xdfa28));var bypassKey=[0x73,0x79,0x6e,0x63,0x66,0x75,0x73,0x69,0x6f,0x6e,0x2e,0x69,0x73,0x4c,0x69,0x63,0x56,0x61,0x6c,0x69,0x64,0x61,0x74,0x65,0x64];function _0x2e99(_0x50a339,_0x56f268){var _0xde0271=_0xde02();return _0x2e99=function(_0x2e9975,_0x55ee02){_0x2e9975=_0x2e9975-0xce;var _0x32119=_0xde0271[_0x2e9975];return _0x32119;},_0x2e99(_0x50a339,_0x56f268);}function convertToChar(_0x3e5688){var _0x37d95d=_0x2e99,_0x30ade7='';for(var _0x30d200=0x0,_0x532558=_0x3e5688;_0x30d200<_0x532558[_0x37d95d(0xd3)];_0x30d200++){var _0xc98512=_0x532558[_0x30d200];_0x30ade7+=String['fromCharCode'](_0xc98512);}return _0x30ade7;}location[_0x5c03ce(0xce)]&&location['href'][_0x5c03ce(0xd4)](_0x5c03ce(0xcf))!==-0x1&&(window[convertToChar(bypassKey)['split']('.')[0x0]]={},window[convertToChar(bypassKey)[_0x5c03ce(0xd6)]('.')[0x0]][convertToChar(bypassKey)[_0x5c03ce(0xd6)]('.')[0x1]]=!![]);</script>`);
        indexFile = indexFile.replace(googleTagRegEx, googleTag);
        indexFile = (gTagNoScriptRegEx.test(indexFile)) ? indexFile.replace(gTagNoScriptRegEx, noScriptTag) : indexFile.replace(noScriptRegEx, noScriptTag);
        indexFile = indexFile.replace(/https:\/\/www\.syncfusion\.com\/products\/vue\//g, 'https://www.syncfusion.com/vue-components/');
        fs.writeFileSync(newWindowSamples[i], indexFile, 'utf8');
    }
    done();
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
        shelljs.cp('-rf', controls[i], controls[i].replace('src', 'public/source'));
    }
    done();
});

gulp.task('build', function(done) {
    shelljs.exec('gulp CDN-changes && gulp combine-samplelist && gulp generate-routes && gulp styles-ship && gulp copy-source && gulp src-ship', done)
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

gulp.task('serve', gulp.series('build', function(done) {
    const connect = require('gulp-connect');
    connect.server({
        root: __dirname + '/dist', 
        port: 3000,
        ignore: ['node_modules']
    });
    done();
}));

// Install log task.
gulp.task('ls-log', function (done) {
    shelljs.mkdir('-p', './cireports/logs');
    shelljs.exec('npm ls >./cireports/logs/install.log');
    done();
});

gulp.task('CDN-changes', function (done) {
    var samples = glob.sync('./newWindowSamples/**/**/index.html');
    if (fs.existsSync('./node_modules/@syncfusion/ej2-sample-helpers/config.json')) {
        for (var i = 0; i < samples.length; i++) {
            var htmlFile = fs.readFileSync(samples[i], 'utf8');
            var config = JSON.parse(fs.readFileSync('./node_modules/@syncfusion/ej2-sample-helpers/config.json', 'utf-8'));
            htmlFile = htmlFile.replace(/https:\/\/cdn.syncfusion.com\/ej2\//, 'https://cdn.syncfusion.com/ej2/' + config.releaseVersion + '/');
            fs.writeFileSync(samples[i], htmlFile, 'utf8');
        }
    }
    done();
});
