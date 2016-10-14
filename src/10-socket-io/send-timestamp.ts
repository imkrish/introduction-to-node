import * as socketio from 'socket.io'
import * as fs from 'fs'
import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as mime from 'mime'

const log = console.log

const handler = (req: http.ServerRequest, res: http.ServerResponse) => {

    const dir = '/'
    let uri = url.parse(<string>req.url).pathname
    if (uri == '/') {
        uri = 'index.html'
    }
    const filename = path.join(dir, uri)

    // Debug
    log(req.url)
    log(path.join(dir, uri))
    log(__dirname + filename) // Absolute path

    fs.readFile(__dirname + filename, (err, data) => {
            if (err) {
                res.writeHead(500)
                return res.end('Error loading index.html')
            }
            res.setHeader('content-type', mime.lookup(filename))
            res.writeHead(200)
            res.end(data)

            // Debug
            log(data) // Buffer
            log(filename + ' has read')
            log(mime.lookup(filename)) // ex. application/javascript
        })

}

const app = http.createServer(handler)
const io = socketio.listen(app)

io.sockets.on('connection', (socket) => {
    setInterval(() => {
        const timestamp = Date.now()
        log('Emitted: ' + timestamp)

        // emit event to client
        socket.emit('timer', timestamp)
    }, 2000)

    // listen from client
    socket.on('submit', (data: string) => {
        log('Submitted: ' + data)
    })
})

app.listen(9999)
log('Server is running!')