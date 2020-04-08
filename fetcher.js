const request = require('request');
const fs= require('fs');
const url = process.argv[2];
const path = process.argv[3];

if(url === undefined || path === undefined) {
  console.log('To use fetcher please enter a valid URL followed by a valid filepath');
} else {


  request(url, (error, response, body) => {
    if(response.statusCode === 200) {
      const data = new Uint8Array(Buffer.from(body));
      fs.writeFile(path, data, (err) => {
        if (err) throw err;
        let size = fs.statSync(path).size;
        console.log(`Downloaded and saved ${size} bytes to ${path}`);  //todo bytes
      });
    } else{
      console.log(`Server returned status code ${response.statusCode}, did not write to file`);
    }
  });
}
