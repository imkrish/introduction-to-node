process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', (chunk: string) => {
    process.stdout.write('Data -> ' + chunk)
})

// Ctrl + D
process.stdin.on('end', () => {
    process.stdout.write('End!\n');
})