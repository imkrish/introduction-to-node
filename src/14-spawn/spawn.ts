import { spawn } from 'child_process'

const ps = spawn('ps', ['ax'])
const grep = spawn('grep', ['node'])

ps.stdout.pipe(grep.stdin)
grep.stdout.pipe(process.stdout)

ps.stderr.on('data', (data) => console.log('ps stderr: ' + data))

grep.stderr.on('data', (data) => console.log('grep stderr: ' + data))