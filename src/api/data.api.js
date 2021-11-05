import Axios from "axios";
import api from "./api";

export default class postApi {
    static getCancelToken = () => Axios.CancelToken.source();

    static getAllPost = async () => {
        const req = await api.get("/all");
        return req.data;
    };

    static addPost = async (title, description) => {
        const newJson = { "title": title, "description": description }
        const req = await api.post("/new", newJson);
        return req.data;
    };

    static delPost = async (id) => {
        console.log(id);
        const req = await api.delete(`/delete`, { data: { "id": id } });
        return req.data
    };
}