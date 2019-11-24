
//process.stdout.write('\x1b[2J')

const fs = require('fs')

//const bashFile = fs.readFileSync('bootstrap.sh', 'utf8')

//process.stdout.write(`\x1b[32mContent of bootstrap.sh:\n\n\x1b[0m${bashFile}`)

const rawFile = fs.readFileSync('foo.js', 'utf8')

const splitFile = rawFile.split('\n').map(x => x.trim())

function pad(x) {
  return x.toString().length === 1 ? `0${x}`: x
}
//const data = [1,2,3]
splitFile.forEach((id, idx) => {

  setTimeout(() => console.log(`${pad(idx)}: ${splitFile[idx]}`), idx * 100)
})

//process.stdout.write(`\x1b[32mContent of foo.js\n\n\x1b[0m${rawFile}`)
