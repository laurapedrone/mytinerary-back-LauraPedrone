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
        const {id} = request.params
        const city = cities.find(city => city.id == id)

        response.json({
          response: city,
          success: true,
          error: null,
        });
      }
}

export default citiesController