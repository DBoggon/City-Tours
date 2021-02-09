import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8080"
  });


  export default { 
    
     allCities(){ 
        return http.get('/cities');   
      },

      getLandmarkByCity(cityName){ 
        return http.get(`/landmarks-city/${cityName}`);   
      },

      getAllLandmarks() {
        return http.get('/get-all-landmarks')
      },

      generateTravelRoute(originQuery, destinationQuery, routeQuery) {
        return http.get(`/itinerary-directions/${originQuery},${destinationQuery},${routeQuery}`)
      }
    
  }