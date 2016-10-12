import { log } from './helpers'
import * as os from 'os'

const toMb = (value: number) => Math.round(((value / 1024 / 1024) * 100) / 1000)

log('Host: ' + os.hostname())
log('15 min. load average: ' + os.loadavg()[2])
log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free')