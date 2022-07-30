//const pptr = require('puppeteer-core');
console.time("main");
const puppeteer = require('puppeteer');
const { blue, cyan, green, magenta, red, yellow, gray } = require('colorette');//TODO GRAY/OR/white
var randomstring = require("randomstring");
const moment = require('moment');
var uilog = require('./UTI/TABF.js'); var readimage = require('./UTI/readimg.js');
const args = puppeteer.defaultArgs();
args.push('--use-gl=egl', '--enable-features=VaapiVideoDecoder');//,'--proxy-server=127.0.0.1:35487');
var argv = require('minimist')(process.argv.slice(2));
//const tmp = require('tmp');
console.log(argv);
var QFFmod = 0;
//var reader = require('b64image_reader');
//var copy = require('copy');
//var result = "";
//var imageinputed = "";
readimage.init(argv.input);
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
    // await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './my-downloads'})
    const client = await page.target().createCDPSession();
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow', downloadPath: './my-downloads'
    });
    page
        .on('console', message => {
            async function on_console() {
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
                        const shunt = await page.evaluate((imageinputed) => {

                            //console.log(evalVar); // 2. should be defined now
                            //…
                            document.getElementById("cvstart0BTON").innerText = imageinputed;
                            document.getElementById("cvstart0BTON").click();

                        }, readimage.img64_()); // 1. pass variable as an argument
                    }//NOELSE
                }//NOELSE
            }
            on_console();
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
    await page.waitForSelector(".QFF", { timeout: 600000 });//10min time out
    //await browser.close();
    await page.exposeFunction('puppeteerLogMutation', () => {
        async function plm() {
            var textContent = "";
            console.log('Mutation Detected: A child node has been added or removed.');
            textContent = await page.evaluate(() => {
                return document.querySelector('.QFF').textContent
            });
            console.log(textContent);
            QFFmod = Date.now();
            var qdn = Date.now();
            setTimeout(() => {
                async function killall() {
                    /*TODO
                    1. maek DB
                    2. put all html & css to DB for debug
                    3. find MD sol.
                    */
                    await browser.close();
                }
                if (QFFmod > qdn) {
                    console.log("no kill");
                } else {
                    console.log("killall");
			console.log("main");
                    killall();
                }
            }, 30000);//30sec
        }
        plm();
    });

    await page.evaluate(() => {
        //var textContent_puppeteer = "[]"; var textContent__puppeteer = "[]";
        const target = document.querySelector('.QFF');
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    puppeteerLogMutation();
                }
            }
        });
        observer.observe(target, { childList: true });
    });
    //await watchdog(browser, page);
})();
/*var textContent = "[]"; var textContent_ = "[]";

async function watchdog(br, pg) {
    async function WD_() {
        textContent_ = textContent;
        textContent = await pg.evaluate(() => {
            return document.querySelector('.QFF').textContent
        });
        console.log(textContent);
    }
    setTimeout(() => {
        if (textContent==="[]" || (textContent != textContent_)) { WD_(); } else {
            console.log("EOF!");
            async function tmpAF() { await br.close(); } tmpAF();
        }
    }, 30000);
}*/
