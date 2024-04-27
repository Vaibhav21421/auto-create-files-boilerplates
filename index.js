const fs = require("fs");
const path = require("path");
const os = require("os");


const foldername = "dev" + Date.now();

var Path = path.join(os.homedir(),"One Drive","Desktop");
const cssplate = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    html,body{
        width: 100%;
        height: 100%;
    }`
    
    const htmlplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>`

    fs.mkdirSync(path.join(Path,foldername));
    console.log("ban");