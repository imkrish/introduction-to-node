import * as fs from 'fs'

if (fs.existsSync('temp')) {
    console.log('Directory exists, removing...')
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt')
    }
    fs.rmdirSync('temp')
}

fs.mkdir('temp', (_) => {
    fs.exists('temp', (exists) => {
        if (exists) {
            process.chdir('temp')
            fs.writeFile('test.txt', 'This is some test text for the file', (_) => {
                fs.rename('test.txt', 'new.txt', (_) => {
                    fs.stat('new.txt', (_, stats) => {
                        console.log('File has size: ', stats.size + ' bytes')
                        fs.readFile('new.txt', (_, data) => {
                            console.log('File contents: ', data.toString())
                        })
                    })
                })
            })
        }
    })
})




