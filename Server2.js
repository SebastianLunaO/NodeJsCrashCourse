import {createServer} from 'http';
const PORT = process.env.PORT;
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'John Doe'},
    {id: 3, name: 'John Doe'},
]

//Logger middleware
const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};
//json middleware
const jsonMiddleware = (req,res,next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

//route Handler for GET /api/users
const getUsersHandler = (req,res) =>{
    res.write(JSON.stringify(users));
    res.end();
}

//route Handler for GET /users/:id
const getUserByID = (req,res) =>{
    const id = req.url.split('/')[3];
    
    const user=users.find((user)=> user.id === parseInt(id))

    if (user){
        res.write(JSON.stringify(user));
    }else{
        res.statusCode=404;
        res.write(JSON.stringify({message: 'Route Not Found'}));
    }
    res.end();
}
//Not found handler
const notFoundHandler= (req,res) =>{
    res.statusCode=404;
    res.write(JSON.stringify({message: 'Route Not Found'}));
    res.end();
}

const server = createServer((req,res) => {
    logger(req,res,()=>{
        jsonMiddleware(req,res,()=>{
            if (req.url === '/api/users' && req.method==='GET'){
                getUsersHandler(req,res);

            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByID(req,res);
            }else{
                notFoundHandler(req,res);
            }
        });
    });
    
});

server.listen(PORT,()=>{
    console.log(`Server running in port: ${PORT}`);
});