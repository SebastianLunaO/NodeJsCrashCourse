import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req,res) => {
   
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>hello</h1>');
});


server.listen(PORT, () => {console.log(`server running in port ${PORT}`)});