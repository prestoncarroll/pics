import axios from 'axios';



export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BabsQgH_BEJa_4-h2ksTQ8MPjP3lWok4TeBfbT5pxOU'
        
    }

});