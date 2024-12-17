import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//URL Object
const urlObj = new URL(urlString);
console.log(urlObj.pathname);

//format()
console.log(url.format(urlObj))

//import.meta.url() -file URL
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

//
const parrams = new URLSearchParams(urlObj.search);
console.log(parrams.get('q'));
parrams.append('limit', '5');
console.log(parrams);
parrams.delete('limit');
console.log(parrams);
