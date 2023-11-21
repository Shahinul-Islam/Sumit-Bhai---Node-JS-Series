const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write(`<html>
            <head></head><title>Form</title>
            <body>
                <form method="post" action="/process">
                    <textarea name="message"></textarea>
                    <button type="submit">Submit</button>   
                </form>
            </body>
        </html>`);
		res.end();
	}
	if (req.url === "/process") {
		const body = [];
		res.on("data", (chunk) => {
			body.push(chunk);
		});
		res.on("end", () => {
			console.log("streamed finished");
			const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
		});
		res.write("thank you for submitting");
		res.end();
	}
});

server.listen(3000);

//creating a stream
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,"utf8");

//getting data
// ourReadStream.on('data',(data)=>{
//     console.log(data);
// })
