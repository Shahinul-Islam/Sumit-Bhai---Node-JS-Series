const path = require("path");
const myPath = "C:/Node Js - Sumit Bhai/video05/index.js";
const pathDetails = path.parse(myPath);
console.log(pathDetails.root);
