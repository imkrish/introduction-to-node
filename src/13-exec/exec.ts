import { exec } from 'child_process'

const child = exec('uptime | cut -d "," -f 1', (err, stdout, stderr) => {
    if (err) {
        console.log('Error: ' + stderr)
    } else {
        console.log('Output is:' + stdout)
    }
})

console.log('PID is: ' + child.pid)