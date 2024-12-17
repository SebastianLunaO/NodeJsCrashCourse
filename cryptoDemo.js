import crypto from 'crypto';

//createHash()
const hash = crypto.createHash('sha256');

hash.update('passsword');
// console.log(hash.digest('hex'));

//randomBytes
crypto.randomBytes(16, (err,buf)=>{
    if (err) throw err;
    // console.log(buf.toString('hex'))
})

//creteCipher & createDecipherid
const algorith = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorith,key,iv);
let encrypted = cipher.update('Hello this is a message','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorith,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted)

