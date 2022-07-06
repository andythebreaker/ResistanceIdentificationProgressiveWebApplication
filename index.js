const pptr = require('puppeteer-core');
//const puppeteer = require('puppeteer');
const { blue, cyan, green, magenta, red, yellow } = require('colorette');
var randomstring = require("randomstring");
const moment = require('moment');
(async () => {
    console.log("=========start=========");
    const browser = await pptr.launch({
        ignoreDefaultArgs: ["--enable-automation"],
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        userDataDir: "./userData"
    });
    //const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page
        .on('console', message => {
            const type = message.type().substr(0, 3).toUpperCase()
            const colors = {
                LOG: text => text,
                ERR: red,
                WAR: yellow,
                INF: cyan
            }
            const color = colors[type] || blue
            console.log(color(`💻 【${type}】 ${message.text()}`))
        })
        .on('pageerror', ({ message }) => console.log(red(`❌ ${message}`)))
        .on('response', response =>
            console.log(green(`📟 ${response.status()} ${response.url()}`)))
        .on('requestfailed', request =>
            console.log(magenta(`🛑 ${request.failure().errorText} ${request.url()}`)))
    await page.goto('https://andythebreaker.github.io');
    await page.screenshot({ path: `${moment().format("dddd_MMMM_Do_YYYY__h_mm_ss_a")}__${randomstring.generate()}.jpg` });
    //await browser.close();
})();