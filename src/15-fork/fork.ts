import { fork } from 'child_process'

const child = fork(__dirname + '/honorstudent.js')

child.on('message', (m: any) => {
    console.log(m.answer)
    child.send({cmd: 'done'})
})

child.send({cmd: 'double', number: 20})