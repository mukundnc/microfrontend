const fs = require('fs');
const path = require('path');

const sourcefolder = path.join(__dirname, '../build/static/js');
const destfile = path.join(__dirname, '../../public/r-app/index.js');

fs.readdir(sourcefolder, (err, files) => {
    console.log(err);
    console.log(sourcefolder, files);
    var sourcefile = '';
    files.forEach(file => {
        if(file.startsWith('main.') && file.endsWith('.js')){
            sourcefile = path.join(sourcefolder, '/', file);
        }
    });
    fs.copyFile(sourcefile, destfile, (err) => {
        console.log(sourcefile);
        console.log(destfile);
        console.log(err);
    });
})