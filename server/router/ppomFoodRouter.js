const express = require("express");
const router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const cron = require("node-cron");

let html = "";
let smp = {};
let scrap_result = {
  date: "",
  title: "",
  shop: "",
  price: "",
  img: "",
  lnk: "",
};

let temp_arr = [];

const get_html = async () => {
  try {
    return await axios.get(
      "https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu&page=1&category=6&divpage=76",
      { responseType: "arraybuffer", responseEncoding: "binary" }
    );
  } catch (err) {
    console.log(err);
  }
};

const get_item = async () => {
  
  html = await get_html();

  let arr_list = [];
  const content = iconv.decode(html.data, "euc-kr");
  const $ = cheerio.load(content);

  $("#revolution_main_table tbody tr").map(async (index, element) => {
    arr_list[index] = {
      date: String($(element).find("td:nth-child(4) > nobr").text()),
      title: String($(element).find("td:nth-child(3) > table > tbody").text()),
      img: String(
        $(element)
          .find("div:nth-of-type(1) > a:nth-child(2)")
          .children("img")
          .data("original")
      ),
      lnk: String(
        $(element)
          .find(
            "td:nth-child(3) > table > tbody > tr > td:nth-child(2) > div > a"
          )
          .attr("href")
      ),
    };
  });

  return arr_list;
};

router.use((req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  const return_item = await get_item();
  res.send(return_item);
});

module.exports = router;
