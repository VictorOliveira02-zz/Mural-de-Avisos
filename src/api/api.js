import Axios from "axios";

const baseURL = "http://localhost:5000/api";

const api = Axios.create({
    baseURL,
});

export default api;
