import axios from "axios";
const API_URL = "/api"
class ProductDataService {
    retrieveAllProduct(page, pageSize = 12) {
        return axios.get(`${API_URL}/products`, { params: { page, pageSize } }, {
           


        });
    }
}

export default new ProductDataService();