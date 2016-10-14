import * as http from 'http'
import * as fs from 'fs'

const server = http.createServer((request: http.ServerRequest, response: http.ServerResponse) => {
        
        response.writeHead(200, {'Content-Type': 'text/plain'})

        console.log(request.url)

        if (request.url === '/file.txt') {
            // Create readable stream to read a file and send that data to response(Writeable stream)
            fs.createReadStream(__dirname + '/file.txt').pipe(response)
        } else {
            response.end('Hello World')
        }
})

console.log(__dirname)
console.log(process.env.PORT, process.env.IP)
server.listen(9999)
console.log('Server is running!')