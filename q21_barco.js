// which of the following code create HTTP Server
var http = require('http');

const PORT=8082;

function handleRequest(req,res) {
	res.end(req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT,function() {
	console.log("Server listening on: http://localhost:%s",PORT);
});


