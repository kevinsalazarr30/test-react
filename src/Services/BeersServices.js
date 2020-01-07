import axios from 'axios'

const url = 'https://api.punkapi.com/v2/beers?';



const getBeers = (page, per_page, beer_name = '') => {
    if (beer_name == '') {
        return axios.get(`${url}page=${page}&per_page=${per_page}`);

    } else {
        return axios.get(`${url}beer_name=${beer_name}`);
    }
}


export default {
    getBeers
}
