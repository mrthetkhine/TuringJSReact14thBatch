const fs = require('node:fs/promises');
async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('./demo.txt', content);
    console.log('Done');
  } catch (err) {
    console.log(err);
  }
}
example();
