const request = require('request');
const fs= require('fs');
const url = process.argv[2];
const path = process.argv[3];




request(url, (error, response, body) => {
  
  const data = new Uint8Array(Buffer.from(body));
  fs.writeFile(path, data, (err) => {
  if (err) throw err;
  let size = fs.statSync(path).size;
  console.log(`Downloaded and saved ${size} bytes to ${path}`);  //todo bytes
});

});

