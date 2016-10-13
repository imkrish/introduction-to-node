import { EventEmitter } from 'events'

const getResource = (c: number) => {
    const e = new EventEmitter()

    process.nextTick(() => {

        let count = 0
        e.emit('start')

        const t = setInterval(() => {
            e.emit('data', ++count)
            if (count === c) {
                e.emit('end', count)
                clearInterval(t)
            }
        }, 1000)
        
    })

    return e
}

const r = getResource(5)
r.on('start', () => console.log('I\'v started'))
r.on('data', (d: number) => console.log('I received data -> ' + d))
r.on('end', (t: number) => console.log('I\'m done, with ' + t + " data events."))










