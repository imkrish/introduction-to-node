process.on('message', (message: any) => {
    if (message.cmd === 'double') {
        console.log(message.number)
        process.send({answer: 'Yeah'})
    } else if (message.cmd === 'done') {
        process.exit()
    }
})