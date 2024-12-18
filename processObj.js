console.log(process.argv);

console.log(process.env.LOGNAME);

console.log(process.pid);
console.log(process.cwd());

console.log(process.uptime());

process.on('exit', ()=>{
    console.log('about to exit')
})

console.log(process.exit(0));
console.log('dsvsdvs')