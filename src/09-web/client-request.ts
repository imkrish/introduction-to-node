import * as http from 'http'

const options: http.RequestOptions = {
    host: 'wwwo.google.com',
    port: 80,
    path: '/',
    method: 'GET'
}

console.log('Going to make a request.....')

const req = http.request('http://www.google.com/', (response) => {  // response is Readable object
    console.log(response.statusCode)
    response.pipe(process.stdout)
})

req.end() // invoke req Writable object