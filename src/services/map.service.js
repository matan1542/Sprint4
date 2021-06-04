import axios  from 'axios'
export async function getLocationByVal(searchVal) {
    const API_KEY = ' AIzaSyAJxEq1dGkLrZA5cB3DKdS1-OgI5LDRxRE';
    try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchVal.value}&key=${API_KEY}&region=ISR&language=EN`)
        return res.data.results
    } catch (err) {
        console.log(err)
        throw new Error('Couldon\'t load the map results ');
    }
}