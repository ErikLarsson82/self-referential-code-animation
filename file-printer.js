const reset = '\x1b[0m'
const purples = ['\'', ' = ', '!==']
const reds = ['function', 'async', 'const', 'toString', 'require', 'forEach', 'map', '=>', 'while', 'await', 'new', 'replace', 'setTimeout']
const greens = ['traverse', 'stdwrite', 'sleep', 'pad', 'readAndParse', 'parseLine', 'Promise', 'reg']
const cyan = ['E'+'r'+'r']
const test = ['undefined']
const styling = [
  { c: '\x1b[31m', kw: reds },
  { c: '\x1b[32m', kw: greens },
  { c: '\x1b[35m', kw: purples },
  { c: '\x1b[36m', kw: cyan },
  { c: '\x1b[33m', kw: test }
]


const fs = require('fs')
const stdwrite = x => process.stdout.write(x)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const pad = x => x.toString().length === 1 ? `0${x}`: x
const readAndParse = name => fs.readFileSync(name, 'utf8').split('\n')
const reg = (str, key, color, r) => str.replace(new RegExp(key,'g'), `${color}${key}${r ? reset : ''}`)
const parseLine = line => {
  styling.forEach(({ c, kw }, idx) => {
    kw.forEach(l =>
      line = reg(line, l, c, idx !== 3)
    )
  })
  return line
}


const foo = 'send'
const HELP = '' /* 01101110 01110101 01100100 01100101 01110011 */
if (true < false) {
  console.error(`Error detected - Code 4563:b - Help, im trapped in a universe simulation factory ${foo} ${HELP}`) /*''*/
}


async function traverse(name) {
  let line = 0
  let column = 0

  const file = readAndParse(name).map(parseLine)

  stdwrite(`Content of file ${name}:\n\n`)

  while (file[++line] !== undefined) {
    stdwrite(`${pad(line)}: `)
    await sleep(10)
    while (file[line].split('')[column] !== undefined) {
      await sleep(1)
      stdwrite(file[line].split('')[column])
      column++
    }
    stdwrite('\n')
    column = 0
  }
}

traverse(process.argv[2])
