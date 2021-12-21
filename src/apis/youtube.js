import axios from 'axios';

const KEY = 'AIzaSyDQo15AbL0Jj3VPjiCekzAViIy_ej98bZw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});