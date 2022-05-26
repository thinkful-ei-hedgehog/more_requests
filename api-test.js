// API Documentation https://openweathermap.org/api

//Sample request URL https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// Api key e65c9fa9b7e55bfdc5fae728963043f5

const axios = require('axios');
const appid = `e65c9fa9b7e55bfdc5fae728963043f5`;

//Promises Solution
function getWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
    return axios.get(url).then(({data})=>`The temp in ${city} is ${data.main.temp}`)
}

//getWeatherData('Denver').then(console.log);

//Async Await Solution
async function getWeatherDataAsync(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
    let {data} = await axios.get(url);
    return `The temp in ${city} is ${data.main.temp}`;
}

getWeatherDataAsync('Denver').then(console.log);