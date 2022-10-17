import axios from "axios";

const APARTMENTS_REST_API_URL = "http://localhost:8080/availableApartments";

class ApartmentService {
  getApartments() {
    return axios.get(APARTMENTS_REST_API_URL);
  }
}

export default new ApartmentService();
