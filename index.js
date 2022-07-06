//const pptr = require('puppeteer-core');
const puppeteer = require('puppeteer');
const { blue, cyan, green, magenta, red, yellow, gray } = require('colorette');
var randomstring = require("randomstring");
const moment = require('moment');
var uilog = require('./UTI/TABF.js');

const args = puppeteer.defaultArgs();
args.push('--use-gl=egl', '--enable-features=VaapiVideoDecoder');

(async () => {
    console.log("=========start=========");
    /*const browser = await pptr.launch({
        ignoreDefaultArgs: ["--enable-automation"],
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        userDataDir: "./userData"
    });*/
    const browser = await puppeteer.launch({ ignoreDefaultArgs: true, args });
    const page = await browser.newPage();
    
    page
        .on('console', message => {
            const type = message.type().substr(0, 3).toUpperCase();
            const colors = {
                LOG: gray,// text => text,
                ERR: red,
                WAR: yellow,
                INF: cyan
            };
            const color = colors[type] || blue;
            console.log(color(`💻 【${type}】 ${message.text()}`));
            if (type === 'LOG') {
                /**
                 * read log, if see "back_to_top...end!!!"
                 * that is ... html load all ok
                 */
                if (message.text() === 'back_to_top...end!!!') {
                    uilog.ohint("BTTE");
                }//NOELSE
            }//NOELSE
        })
        .on('pageerror', ({ message }) => {
            console.log(red(`❌ ${message}`));
            if (message.includes("$")) {
                /**
                 * if JQUERY load in TOO LATE
                 * TODO: do something
                 */
                uilog.ohint("JQURY!");
            }
        })
        .on('response', response =>
            console.log(green(`📟 ${response.status()} ${response.url().startsWith('data:') ? response.url().slice(0, 48) + '...' :
                response.url().length > 1000 ? '〔TOO LONG !!!〕' + response.url().slice(0, 48) : response.url()
                }`)))
        .on('requestfailed', request =>
            console.log(magenta(`🛑 ${request.failure().errorText} ${request.url().startsWith('data:') ? request.url().slice(0, 48) + '...' :
                request.url().length > 1000 ? '〔TOO LONG !!!〕' + request.url().slice(0, 48) : request.url()
                }`)))
    await page.goto('https://andythebreaker.github.io');
    await page.screenshot({ path: `./tmppic/${moment().format("dddd_MMMM_Do_YYYY__h_mm_ss_a")}__${randomstring.generate()}.jpg` });
    //await browser.close();
})();