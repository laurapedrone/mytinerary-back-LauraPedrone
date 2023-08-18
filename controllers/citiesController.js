import cities from "../cities.js";

const citiesController = {
    getAllCities: async(request, response, next) => {
        response.json({
          response: cities,
          success: true,
          error: null,
        });
      },
      getOneCity: async(request, response, next) => {
        response.json({
          response: cities[0],
          success: true,
          error: null,
        });
      }
}

export default citiesController