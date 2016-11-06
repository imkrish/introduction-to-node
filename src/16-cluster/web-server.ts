import * as cluster from 'cluster'
import * as http from 'http'

const numWorkers = 2

if (cluster.isMaster) {

    for (let i = 0; i < numWorkers; i++) {
        console.log('master: about to fork a worker')
        cluster.fork()
    }

    cluster.on('fork', (worker) => {
        console.log(`master: fork event (worker ${worker.id})`)
    })

    cluster.on('online', (worker) => {
        console.log(`master: online event (worker ${worker.id})`)
    })

    cluster.on('listening', (worker, address) => {
        console.log(`master: listening event (worker ${worker.id} pid: ${worker.process.pid} ${address.address}:${address.port})`)
    })

    cluster.on('exit', (worker, _, __) => {
        console.log(`master: exit event (worker ${worker.id})`)
    })

} else {

    console.log(`worker: worker #${cluster.worker.id} ready!`)

    let count = 0

    // Workers can share any TCP connection
    // In this case its a HTTP server
    http.createServer((_, res) => {
        res.writeHead(200)
        //console.dir(req)

        count++
        console.log(`Worker #${cluster.worker.id} is incrementing count to ${count}`)

        res.end(`Hello world from worker #${cluster.worker.id} pid: ${cluster.worker.process.pid} with count = ${count}`)
        if (count === 3) {
            cluster.worker.destroy()
        }
    }).listen(8000)

}