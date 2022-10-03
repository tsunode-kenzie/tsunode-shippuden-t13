import axios from "axios";

const api = axios.create({
    baseURL: "https://naruto-api.herokuapp.com/api/v1",
    timeout: 5000, // 5 segundos
});

export default api;