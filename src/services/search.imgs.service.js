const axios = require('axios');
const cheerio = require('cheerio')


export async function suggestImgs(term) {
    let imgUrl = `https://www.photosforclass.com/search/${term}`
    const res = await axios.get(imgUrl)
    const el = cheerio.load(res.data)
    const imgs = Array.from(el('img'))
    console.log("🚀 ~ file: search.imgs.service.js ~ line 10 ~ suggestImgs ~ imgs", imgs)
    // const animalImgs = imgs.slice(0, 3)
    // return animalImgs.map(img => img.attribs.src)
}
