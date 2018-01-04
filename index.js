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
        .option('-W, --width <width>', 'set viewport width')
        .option('-H, --height <height>', 'set viewport height')
        .option('-V, --view', 'screenshot viewport')
        .option('-F, --full', 'screenshots of the full page')
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

async function scroll(page){
    await page.evaluate(() => {
        return new Promise((resolve, reject) => {
            var totalHeight = 0
            var distance = 400
            var timer = setInterval(() => {
                window.scrollBy(0, distance)
                totalHeight += distance
    
                if(totalHeight >= document.body.scrollHeight){
                    clearInterval(timer)
                    resolve()
                }
            }, 200)
        })
        .catch(e => {
            console.log(e)
        })
    })
}

async function captor(url, filename, options){
    try{
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.goto(url)
        await page.setViewport({
            width: 1200,
            height: 800
        })

        if(options.full){
            await scroll(page);
        }

        console.log('📸  正在生成截图...')
        await page.screenshot({
            path: filename,
            fullPage: !!options.full
        })
        console.log('📷  截图生成完毕')
        await page.close()
        await browser.close()
    }
    catch(e){
        console.log(e)
    }
}
