const express = require('express');
const router = express.Router();

const axios = require('axios');
const cheerio = require('cheerio');

let html = "";
let smp = {};
let scrap_result = {
    date : "",
    title : "",
    shop : "",
    price : "",
    img : "",
    lnk : ""
}

let temp_arr = [];

const get_html = async() => {
    try {
        return await axios.get(
            "https://www.fmkorea.com/search.php?mid=hotdeal&listStyle=webzine&search_keyword=%EB%AA%A8%EB%8B%88%ED%84%B0&search_target=title_content&category=1254381811"
        );
    } catch (err) {
        console.log(err);
    }
}

const get_item = async() => {
    if(!html){
        html = await get_html();
    }
    
    let arr_list = [];
    const $ = cheerio.load(html.data);

    $(".fm_best_widget ul li").map(async( index, element )=>{
        arr_list[index] = {
            date : String($(element).find('.regdate').text()),
            title : String($(element).find('h3').text()),
            shop : String($(element).find('div:nth-of-type(1) > .hotdeal_info span:nth-child(1)').text()),
            price : String($(element).find('div:nth-of-type(1) > .hotdeal_info span:nth-child(2)').text()),
            img : String($(element).find('div:nth-of-type(1) > a:nth-child(2)').children('img').data('original')),
            lnk : String($(element).find('div:nth-of-type(1) > a:nth-child(1)').attr('href')),
        }
    })

    return arr_list;
}

router.use(( req, res, next )=>{
    next();
});

router.get('/', async ( req, res )=>{
    const return_item = await get_item();
    res.send(return_item);
});

router.get('/about', ( req, res )=>{
    res.send('hi2');
});

module.exports = router;