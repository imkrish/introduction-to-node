require('mocha')
import * as should from 'should'


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

describe('MathFun', () => {

    describe('When used asynchronously', () => {

        it('should return result correctly', (done) => {

            evenDoubler(3, (err: Error, results: number) => {
                console.log(err)
                console.log(results)
                should.not.exist(err)
                should.exist(results)
            })

            console.log('hey')

            done()

        })

    })

})

