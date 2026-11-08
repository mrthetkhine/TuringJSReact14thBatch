const fs = require('node:fs/promises');

async function example() {
  let filehandle;
  try {
    filehandle = await fs.open('./demo.txt', 'r');
    console.log(filehandle.fd);
    
  } finally {
    if (filehandle) {
      await filehandle.close();
    }
  }
}
example();