//import axios from "axios";
const axios = require("axios");
//const location = "yatiyana,matara";

const getweather = (location) => {
  return new Promise((resolve, reject) => {
    const weatherurl =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?key=FQAEQ9LMPGLBNSJXADN58JPG4";
    // Make a request for a user with a given ID
    axios
      .get(weatherurl)
      .then(function (response) {
        resolve({
          location: "Location : " + response.data.resolvedAddress,
          temp:
            "Current Temp: " +
            parseFloat(
              ((Number(response.data.currentConditions.temp) - 32) * 5) / 9
            ).toFixed(2) +
            "C",
          condition:
            "Current Condition: " + response.data.currentConditions.conditions,
        });
        // handle success
        // console.log("Location : " + response.data.resolvedAddress);
        // console.log("Current Temp: " +((Number(response.data.currentConditions.temp) - 32) * 5) / 9 +" C");
        // console.log("Current Condition: " + response.data.currentConditions.conditions);
      })
      .catch(function (error) {
        reject({ error: error.response.data });
        // handle error
        //console.log(error.response.data);
      });
  });
};

module.exports = getweather;
