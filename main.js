const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;
 
const taurus = {
  name: "Taurus",
  meaning: "Bull",
  starsWithPlanets: 8,
  quadrant: "NQ4",
};
 
axios.get(constellationsUrl).then(({ data }) =>{
    if(data.find(constel=>constel.name===taurus.name)){
        throw 'Constellation exists!';
    }
    return axios.post(constellationsUrl, taurus).then(({ data }) => data);
}).then(postedData=>console.log('posted!',postedData)).catch(console.error);

