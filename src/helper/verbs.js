const fs = require('fs').promises
const verbs = require('./formattedVerbs').verbs

async function write() {
  let result = a.replace(/\s+/g, ' ');
  let arr = [];

  let splittedResult = result.split(/([0-9]+)/)  ;
  splittedResult.shift(); // remove the white space on pos 0

  for (let i = 1; i < splittedResult.length; i += 2 ) {
    let item = splittedResult[i];
    let id = splittedResult[i + 1]
    arr.push({id: id-1, means: item})
  }


  arr[arr.length - 1].id = 99;

  console.log(arr);

  let written = await fs.appendFile('./formattedVerbs.js', JSON.stringify(arr), 'utf-8')
} // write the verbs to the file

// read file
async function read() {
  console.log(verbs);
}

read();