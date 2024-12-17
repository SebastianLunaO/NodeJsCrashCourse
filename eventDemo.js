import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler (name) {
    console.log('hellos World ' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye World ' + name);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet','John');
myEmitter.emit('goodbye','Jose');

myEmitter.on('error',(err)=>{
    console.log('An Error Ocurred:', err);
})

myEmitter.emit('error', new Error('Something went Wrong'));