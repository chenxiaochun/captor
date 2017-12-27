const commander = require('commander')
const puppeteer = require('puppeteer')

module.exports = {
    init(argv){
        program(argv)
    }
}

function program(argv){
    commander
        .version(require('./package.json').version)
        .usage('<url> [filename] [options]')
        .option('-v --view', 'screenshot view area')
        .option('-f --full', 'screenshots of the entire page')

    commander.parse(argv)
    if(argv.length <= 2){
        commander.help()
    }
}
