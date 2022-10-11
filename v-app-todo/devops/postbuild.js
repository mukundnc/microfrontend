const fs = require('fs');
const path = require('path');

const sourcefile = path.join(__dirname, '../dist/vue-app-todo.js');
const destfile = path.join(__dirname, '../../public/v-app-todo/vue-app-todo.js');

fs.copyFile(sourcefile, destfile, (err) => {
    console.log(sourcefile);
    console.log(destfile);
    console.log(err);
});