const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function getConstellations(ids) {
    const promises = ids.map((id) => {  //creating an array of pending promises
      const url = `${BASE_URL}/constellations/${id}`;
      return axios.get(url).then(({data})=>data);
    });
    //promises = [ Promise { <pending> }, Promise { <pending> } ]
    console.log('promiseslist',promises);
   
    return Promise.all(promises);
  }
   
  const ids = ["KGQIwSq", "32TN5F8"];
  getConstellations(ids).then(console.log);
  