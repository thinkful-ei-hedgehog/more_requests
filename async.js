const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

async function getConstellationNameById(id) {
    const url = `${BASE_URL}/constellations/${id}`;
    try {
      const { data } = await test();//axios.get(url);
      return data.name;
    } catch (error) {
      throw `Constellation with id of ${id} could not be found.`;
    }
  }
   function test(){
       console.log('i am a function')
   }
  getConstellationNameById("error").then(console.log).catch(console.error);