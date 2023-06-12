const exec = require('child_process').exec;
console.log('Installing dependencies...');
exec('npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise standard-version chalk readline-sync')
    .on('close', () => {
        console.log('Dependencies installed!');
    });