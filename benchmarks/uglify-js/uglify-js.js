'use strict';
const execSync = require('child_process').execSync;

execSync(`
    /bin/sh -c '"${process.execPath}" \\
                "${__dirname}/node_modules/.bin/uglifyjs" \\
                "${__dirname}/data/math.js" \\
                -mc warnings=0' > /dev/null`);
