var http = require('http');
var url = require('url');
var fs = require('fs');

/* Example of url it works on : "http://localhost:8080/?path=C:\Users\W\Desktop\test"*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "done";
  var filePath = q.path;
  fs.watch(filePath, (TypeOfChange, nameOfFile) => {
  console.log("\nModified: ", nameOfFile, "\nType of Change: ",TypeOfChange);
  fs.readFile(filePath+ '/'+ nameOfFile, cB);
})
    res.end(txt);
}).listen(8080);

function cB (err, data)
  {
  //Show error if exists, if not shows file contents
  err ? Function("error","throw error")(err) : console.log(data.toString('utf8'));
  };