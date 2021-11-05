import Axios from "axios";

//const baseURL = "http://localhost:5000/api";
const baseURL = "https://mural-de-avisos-backend.herokuapp.com/api";
const api = Axios.create({
    baseURL,
});

export default api;
