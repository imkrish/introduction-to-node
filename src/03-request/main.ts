import * as request from 'request'
import { ServerResponse } from 'http'

request('http://www.pluralsight.com', (error: Error, response: ServerResponse, body: any) => {

    if (!error && response.statusCode === 200) {
        console.log(body)
    } else {
        console.log(error)
    }
})