import * as util from 'util'
import { EventEmitter } from 'events'

export class Resource extends EventEmitter  {

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
        })
    }
}

util.inherits(Resource, EventEmitter)