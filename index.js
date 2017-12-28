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
        .option('-W --width <width>', 'set viewport width')
        .option('-H --height <height>', 'set viewport height')
        .option('-V --view', 'screenshot viewport')
        .option('-F --full', 'screenshots of the full page')
        .action((url, filename, options) => {
            if(filename.toString() == '[object Object]'){
                options = filename
                filename = 'screenshort.png'
            }
            if(isHttpUrl(url)){
                captor(url, filename, options)
            }
        })

    commander.parse(argv)
    if(argv.length <= 2){
        commander.help()
    }
}

function isHttpUrl(url){
    return url.includes('://')
}

async function captor(url, filename, options){
    try{
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.goto(url)
        await page.screenshot({
            path: filename
        })
        page.close()
        browser.close()
    }
    catch(e){
        console.log(e)
    }
}
