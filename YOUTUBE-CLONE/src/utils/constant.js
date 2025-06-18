const GOOGLE_API_KEY = "AIzaSyDvHsSoM5RpvJcz_9jS2LmzHxI8Hgj3zP4";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

//key = "AIzaSyDvHsSoM5RpvJcz_9jS2LmzHxI8Hgj3zP4"

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="; 

export const YOUTUBE_INPUT_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyDvHsSoM5RpvJcz_9jS2LmzHxI8Hgj3zP4&q=`;

export const LIVE_CHAT_COUNT = 15