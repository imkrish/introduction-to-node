import * as fs from 'fs'
import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as mime from 'mime'
const log = console.log 

http.createServer((req, res) => {

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

}).listen(8888)

console.log('Listening to server on 8888...')