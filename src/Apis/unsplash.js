import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com', 
    headers : {
        Authorization : 'Client-ID arD2920rVhHv6AkfMfAf9qa7aIKrSc6cNwJxOm1m9B0 '
},
});