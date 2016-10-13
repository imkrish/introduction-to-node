import { Resource } from './resource'

const r = new Resource(3)

r.on('start', () => console.log('I\'v started'))

r.on('data', (d: number) => console.log('I received data -> ' + d))

r.on('end', (t: number) => console.log('I\'m done, with ' + t + " data events."))
