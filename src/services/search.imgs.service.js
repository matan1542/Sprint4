import axios from "axios";
const cheerio = require('cheerio')


export async function suggestImgs(term) {
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: { q: term, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
        headers: {
            'x-rapidapi-key': 'fc32ec2f1bmsh941c4c3669fa2dap1db47cjsn2f47f7e69f8f',
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };

    const res = await axios.request(options)
    return res.data.value
}


