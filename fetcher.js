// to do:
// get url & local file path from command line (process.argv)
// make an http request using npm request
// write a file from the data received use node fs
// print out message confirmation

const request = require('request');
const fs = require('fs');

let url = process.argv[2]
let localPath = process.argv[3]

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
  })
});

