import * as request from 'request'

const stream = request('http://www.pluralsight.com')

stream.on('data', (chunk) => {
    console.log('>>>DATA>>> ', chunk)  // Buffer
})

stream.on('end', () => {
    console.log('>>>DONE>>>')
})