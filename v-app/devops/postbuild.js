const fs = require('fs');
const path = require('path');

const sourcefile = path.join(__dirname, '../dist/vue-app.js');
const destfile = path.join(__dirname, '../../public/v-app/index.js');

fs.copyFile(sourcefile, destfile, (err) => {
    console.log(sourcefile);
    console.log(destfile);
    console.log(err);
});