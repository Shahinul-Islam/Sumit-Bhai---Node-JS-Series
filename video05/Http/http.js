const http = require("http");

//creating new server
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("hello node developer? ");
		res.write("how are you doing");
		res.end();
	} else if (req.url==="/about"){
        res.write("hello node developer!");
		res.write("tell me about yourself");
		res.end();
    } else{
        res.write("Not Found")
        res.end();
    }
});
// server.on("connection",(socket)=>{
//     console.log("New Connection ...");
// })
server.listen(3000);
console.log("listening of port: 3000");
