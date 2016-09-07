#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var jshint = require('jshint').JSHINT;
var async = require('async');

// var PackageJSON = require('../../package.json');

//Read jshint rc file
var basepath = path.resolve(__dirname, "..","..")
var jshintrcPath = path.join(basepath,".jshintrc")
var jshintRC = JSON.parse(fs.readFileSync(jshintrcPath,'utf-8'))

// console.log(PackageJSON.jshintConfig)
// var jshintRC = PackageJSON.jshintConfig

var foldersToProcess = [
    'js',
    'js/controllers',
    'js/services',
    'js/states',
    'js/filters',
    'js/directives'
];

foldersToProcess.forEach(function(folder) {
    processFiles("www/" + folder);
});

function processFiles(dir, callback) {
    var errorCount = 0;
    fs.readdir(dir, function(err, list) {
        if (err) {
            console.log('processFiles err: ' + err);
            return;
        }
        async.eachSeries(list, function(file, innercallback) {
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if(!stat.isDirectory()) {
                    if(path.extname(file) === ".js") {
                        lintFile(file, function(hasError) {
                            if(hasError) {
                                errorCount++;
                            }
                            innercallback();
                        });
                    } else {
                        innercallback();
                    }
                } else {
                    innercallback();
                }
            });
        }, function(error) {
            if(errorCount > 0) {
                process.exit(1);
            }
        });
    });
}

function lintFile(file, callback) {
    console.log("Linting " + file);
    fs.readFile(file, function(err, data) {
        if(err) {
            console.log('Error: ' + err);
            return;
        }
        if(jshint(data.toString(),jshintRC)) {
            console.log('File ' + file + ' has no errors.');
            console.log('-----------------------------------------');
            callback(false);
        } else {
            console.log('Errors in file ' + file);
            var out = jshint.data()
            errors = out.errors;
            for(var j = 0; j < errors.length; j++) {
                console.log(errors[j].line + ':' + errors[j].character + ' -> ' + errors[j].reason + ' -> ' +
errors[j].evidence);
            }
            console.log('-----------------------------------------');
            callback(true);
        }
    });
}