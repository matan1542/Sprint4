import axios from 'axios'
const youtubeKey = 'AIzaSyDKnlCSl3KiML7hT4Xqs9PLCMLCPM6cDss';

export async function getVideos(valueSearch) {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${youtubeKey}&q=${valueSearch}`)
      try{
          return res.data
      } catch(err){
         throw new Error('Had Problem with youtube',err)
    }
}
