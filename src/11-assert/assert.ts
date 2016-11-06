import * as assert from 'assert';

const maxTime = 1000

const evenDoubler = (value :number, callback: Function) => {

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

const evenDoublerSync = (value: number) => {
    if (value % 2) {
        throw(new Error('Odd input'))
    } else {
        return value * 2
    }
}

assert.equal(evenDoublerSync(2), 4)
assert.throws(evenDoublerSync.bind({}, 3), /Odd/)

evenDoubler(2, (err: Error, results: number) => {
    assert.ifError(err)
    assert.equal(results, 5, 'evenDoubler failed on even number')
})

evenDoubler(3, (err: Error, _: number) => {
    assert.notEqual(err, null)
})