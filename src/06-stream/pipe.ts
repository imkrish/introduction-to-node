import * as request from 'request'
import * as fs from 'fs'
import * as zlib from 'zlib'

// readable stream
const s = request('http://www.pluralsight.com')

// to writable stream
s.pipe(process.stdout)

// to another writable stream
s.pipe(fs.createWriteStream('pluralsight.html'))

// readable & writable stream
// zlib.createGzip() -> read in uncompressed content and output compressed content
s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'))