process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', (chunk: string) => {
    process.stdout.write('Data -> ' + chunk)
})

// Ctrl + D
process.stdin.on('end', () => {
    process.stdout.write('End!\n');
})

// kill process.pid
// kill -TERM process.pid
process.on('SIGTERM', () => {
    process.stderr.write('Why are you trying to terminate me?!?   :-)\n')
})

console.log('Node is running as process #', process.pid)