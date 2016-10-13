import * as util from 'util'
import { EventEmitter } from 'events'

class Resource extends EventEmitter  {

    public constructor(private maxEvents: number) {
        super()
        this.runProcess()
    }

    private runProcess() {
        let count = 0
        this.emit('start')
        const t = setInterval(() => {
            this.emit('data', ++ count)
            if (count === this.maxEvents) {
                this.emit('end', count)
                clearInterval(t)
            }
        }, 1000)
    }
}

const r = new Resource(10)
r.on('start', () => console.log('I\'v started'))
r.on('data', (d: number) => console.log('I received data -> ' + d))
r.on('end', (t: number) => console.log('I\'m done, with ' + t + " data events."))














