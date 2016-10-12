import * as fs from 'fs'
import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as mime from 'mime'
const log = console.log 

http.createServer((req, res) => {
    log(req.url)
    const dir = '/'
    let uri = url.parse(<string>req.url).pathname
    if (uri == '/') {
        uri = 'index.html'
    }
    const filename = path.join(dir, uri)
    log(path.join(dir, uri))
    log(__dirname + filename)
    fs.readFile(__dirname + filename, (err, data) => {
            if (err) {
                res.writeHead(500)
                return res.end('Error loading index.html')
            }
            log(data)
            log(filename + ' has read')
            res.setHeader('content-type', mime.lookup(filename))
            log(mime.lookup(filename))
            res.writeHead(200)
            res.end(data)
        })

}).listen(8888)

console.log('Listening to server on 8888...')