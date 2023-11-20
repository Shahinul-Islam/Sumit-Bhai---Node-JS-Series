const path = require("path");
const os = require("os");
const fs = require("fs");
const School = require("./school");
const school = new School();

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
	// console.log(data.toString());
});

// events
// register a listener
school.on("bellRing", ({ period, text }) => {
	console.log(`we need to run! because the period is : ${period} ${text}`);
});
school.startPeriod();
