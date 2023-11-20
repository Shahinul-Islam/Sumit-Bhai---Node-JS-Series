const path = require("path");
const os = require("os");
const fs = require("fs");

// path
const myPath = "C:/Node Js - Sumit Bhai/video05/index.js";
const pathDetails = path.parse(myPath);
// console.log(pathDetails.root);

// os
const platform = os.platform();
const homeDir = os.homedir();
const memory = os.freemem();
const core = os.cpus();
// console.log(core);

// fs
// fs.writeFileSync("newFile.txt", "hello node developer");
fs.readFile("newFile.txt", (err, data) => {
	console.log(data.toString());
});
