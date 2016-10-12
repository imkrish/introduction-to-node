const maxTime = 1000

const evenDouble = (value :number, callback: Function) => {

    const waitTime = Math.floor(Math.random() * (maxTime + 1))
    
    if (value % 2) {
        setTimeout(() => {
            callback(new Error('Odd input ' + waitTime + 'ms'))
        }, waitTime)
    } else {
        setTimeout(() => {
            callback(null, value * 2, waitTime)
        }, waitTime)
    }

}

const handleResults = (err: any, results: number, time: number) => {
    if (err) {
        console.log('Error: ' + err.message)
    } else {
        console.log('The results are: ' + results + " (" + time + "ms)")
    }
}

evenDouble(1, handleResults)
evenDouble(2, handleResults)