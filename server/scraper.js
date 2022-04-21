const cheerio = require('cheerio')
const puppeteer = require("puppeteer");
// import totalUrls from './db.js';
const {totalUrls, songs} = require('./db.js')
// console.log(totalUrls, 'URLS HERE')
const allChords = [];
// // const urls =[];

const urlScrape1 = async () => {
    const browser = await puppeteer.launch({
        // headless:false,
        // defaultViewport: {
        // }
    });


    const page= await browser.newPage();
    await page.goto("https://www.ultimate-guitar.com/top/tabs?order=hitsdailygroup_desc&type=chords");

    const pageData= await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        };
    });

    const $ = cheerio.load(pageData.html);

    $('.SAQyd a[href]').each(function(index, value) {
        const url = $(value).attr('href');
        if (!urls.includes(url)) urls.push(url);
    });

    await browser.close();
    console.log(urls, 'all urls')
    console.log(urls.length);

};



const urlScrape= async () => {
    const browser = await puppeteer.launch({
        // headless:false,
        // defaultViewport: {
        // }
    });

    const page= await browser.newPage();
    await page.goto("https://www.ultimate-guitar.com/top/tabs?order=hitstotal_desc&type=chords");

    const pageData= await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,

        };
    });

    const $ = cheerio.load(pageData.html);

    $('.SAQyd a[href]').each(function(index, value) {
        const url = $(value).attr('href');
        if (!urls.includes(url)) urls.push(url);
    });

    await browser.close();
    console.log(urls, 'all time urls')
    // console.log(urls.length);
    return urls;
};
// // urlScrape();
// // setTimeout(()=>{console.log(urls, urls.length, 'urls timed')}, 2000);
// // setTimeout(()=>{console.log(allChords, allChords.length, 'all chords timed')}, 3000);

//---------------------------------------------------

const scrape = async (url) => {
    const browser = await puppeteer.launch({
        // headless:false,
        // defaultViewport: {

        // }
    });

    const chords = [];
    const info = [];
    const page= await browser.newPage();

    await page.goto(url);

    // await page.screenshot({ path: "image.png"});

    const pageData= await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        };
    });


    const $ = cheerio.load(pageData.html);


    $('._3naMH').each(function(i, elm) {
        info.push($(this).text())
        // console.log(chords)
    });

    $('._1s0F3').each(function(i, elm) {
        chords.push($(this).text())
        // console.log(chords)
    });
    const titleFull = $('._2ewmI').text();
    const firstIndTitle= titleFull.indexOf("Chords")
    const title = titleFull.slice(0,firstIndTitle-1)
    const firstIndArtist = titleFull.indexOf("by")
    const artist =titleFull.slice(firstIndArtist+3,-2)

    const chordsObj={'title': title, "artist": artist, "url": url, "capo": (info[2]).slice(6)||'none', "chords": chords};
    allChords.push(chordsObj)

    console.log(allChords, 'all chords ')
    await browser.close();
    return;
};

const scrapeLoop = async () => {
    // const newUrls = await urlScrape();
    const func = await totalUrls.forEach(url => {
        scrape(url)
    });
    console.log(func, 'func here')
    console.log(allChords, 'all chords')
    return func;
}

scrapeLoop();



// scrape("https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-198052");

// // (async () => {
// //     const browser = await puppeteer.launch({
// //         // headless:false,
// //         // defaultViewport: {

// //         // }
// //     });

// //     const chords = [];
// //     const page= await browser.newPage();
// //     await page.goto("https://tabs.ultimate-guitar.com/tab/jeff-buckley/hallelujah-chords-198052");

// //     await page.screenshot({ path: "image.png"});

// //     const pageData= await page.evaluate(()=>{
// //         return {
// //             html: document.documentElement.innerHTML,
// //             width: document.documentElement.clientWidth,
// //             height: document.documentElement.clientHeight,

// //         };
// //     });
// //     // console.log(pageData);

// //     const $ = cheerio.load(pageData.html);
// //     // const element = $("._1s0F3");
// //     // chords.push((element.html( ) + ' '));
// //     // // console.log((element.text()).trim());
// //     // console.log(chords);
// //     // // console.log(element)

// //     $('._1s0F3').each(function(i, elm) {
// //         chords.push($(this).text())
// //         // console.log(chords)
// //     });
// //     const title = $('._2ewmI').text();
// //         // console.log(title)
// //     const chordsObj={title: title, chords: chords};
// //     allChords.push(chordsObj)
// //     // console.log(chordsObj);
// //     console.log(allChords, 'all chords')
// //     await browser.close();
// //     // return chordsObj;

// // })();

// // (async () => {
// //     const browser = await puppeteer.launch({
// //         // headless:false,
// //         // defaultViewport: {

// //         // }
// //     });

// //     const chords = [];
// //     const page= await browser.newPage();
// //     await page.goto("https://tabs.ultimate-guitar.com/tab/oasis/wonderwall-chords-27596");

// //     await page.screenshot({ path: "image.png"});

// //     const pageData= await page.evaluate(()=>{
// //         return {
// //             html: document.documentElement.innerHTML,
// //             width: document.documentElement.clientWidth,
// //             height: document.documentElement.clientHeight,

// //         };
// //     });
// //     // console.log(pageData);

// //     const $ = cheerio.load(pageData.html);
// //     // const element = $("._1s0F3");
// //     // chords.push((element.html( ) + ' '));
// //     // // console.log((element.text()).trim());
// //     // console.log(chords);
// //     // // console.log(element)

// //     $('._1s0F3').each(function(i, elm) {
// //         chords.push($(this).text())
// //         // console.log(chords)
// //     });
// //     const title = $('._2ewmI').text();
// //         // console.log(title)
// //     const chordsObj={title: title, chords: chords};
// //     allChords.push(chordsObj)
// //     // console.log(chordsObj);
// //     console.log(allChords, 'all chords')
// //     await browser.close();
// //     // return chordsObj;

// // })();




// module.exports = allChords;

//----------------
// };

// (async function () {
//     console.log(allChords, 'all chords outside')

// })();


// console.log(chordsFunc);

// (async () => {
//     const browser = await puppeteer.launch({
//         // headless:false,
//         // defaultViewport: {

//         // }
//     });

//     const page= await browser.newPage();
//     await page.goto("https://bbc.com");

//     await page.screenshot({ path: "image.png"});

//     const pageData= await page.evaluate(()=>{
//         return {
//             html: document.documentElement.innerHTML,
//             width: document.documentElement.clientWidth,
//             height: document.documentElement.clientHeight,

//         };
//     });
//     // console.log(pageData);

//     const $ = cheerio.load(pageData.html);
//     const element = $(".media__link");
//     console.log((element.text()).trim());

//     await browser.close();
// })();


// // const checkChords = async (inputChords) => {
// //     await allChords
// //     return allChords[9]
// // }

// // console.log(checkChords('hi'), 'CHECK CHORDS')