import fs from 'fs/promises';

//readfile() -callback

// fs.readFile('./test.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// //readfile() -synchtonous version
// const data = fs.readFileSync('./test.txt','utf8')
// console.log(data)

//ReadFile () - Promise .the()
// fs.readFile('./test.txt','utf8')
// .then((data) => {
// console.log(data)
// })
// .catch((err)=>{console.log(err)});

//readFile - async/await

const readFile = async () =>{
    try{
        const data = await fs.readFile('./test.txt','utf8');
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
// writeFile

const writeFile = async () =>{
    try{
        await fs.writeFile('./test.txt','Writing into the file');
        console.log('File written');
    }catch (error){
        console.log(error);
    }
}

const appendFile = async () =>{
    try {
        await fs.appendFile('./test.txt','\nThis is append text');
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();