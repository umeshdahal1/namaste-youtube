const GOOGLE_API_KEY = "AIzaSyDyq5xwyhVlK5oKq7BzoseJhpJ7lV9neIY"


export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=NP&key="+ 
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
