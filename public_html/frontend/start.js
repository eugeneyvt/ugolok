const exec = require('child_process').exec;
require('dotenv').config();

const port = process.env.PORT || 3000;
const command = `node --max-old-space-size=4096 ./node_modules/.bin/next start -p ${port}`;

console.log(`Starting server on port: ${port}`);
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});