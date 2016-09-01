#!/usr/bin/env node

// Add Platform Class
// v1.0
// Automatically adds the platform class to the body tag
// after the `prepare` command. By placing the platform CSS classes
// directly in the HTML built for the platform, it speeds up
// rendering the correct layout/style for the specific platform
// instead of waiting for the JS to figure out the correct classes.

var fs = require('fs');
var path = require('path');

var rootdir = process.argv[2];

function findNgCordovaInjector(html) {
      // get the body tag
      try{
        return html.match(/(,['|""]ngCordovaMocks['|""])/g)[0];
      }catch(e){}
   }

function removeNgcordovMocksInjector(indexPath, platform){
// add the platform class to the body tag
  try {
    var platformClass = 'platform-' + platform;
    var html = fs.readFileSync(indexPath, 'utf8');

    var injector = findNgCordovaInjector(html);
    if(!injector) return; // no opening body tag, something's wrong

    process.stdout.write('found injector '+ injector +'. \n');

    html = html.replace(injector,'')
    fs.writeFileSync(indexPath, html, 'utf8');

    process.stdout.write('remove injector ngCordovaMocks. \n');
  } catch(e) {
    process.stdout.write(e);
  }
}

if (rootdir) {

  // go through each of the platform directories that have been prepared
  var platforms = (process.env.CORDOVA_PLATFORMS ? process.env.CORDOVA_PLATFORMS.split(',') : []);

  for(var x=0; x<platforms.length; x++) {
    // open up the index.html file at the www root
    try {
      var platform = platforms[x].trim().toLowerCase();
      var indexPath;

      if(platform == 'android') {
        indexPath = path.join('platforms', platform, 'assets', 'www', 'properties', 'app.js');
      } else {
        indexPath = path.join('platforms', platform, 'www',  'properties',  'app.js');
      }

      if(fs.existsSync(indexPath)) {
        removeNgcordovMocksInjector(indexPath, platform);
      }

    } catch(e) {
      process.stdout.write(e);
    }
  }

}
