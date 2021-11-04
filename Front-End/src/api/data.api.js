import Axios from "axios";
import api from "./api";

export default class postApi {
    static getCancelToken = () => Axios.CancelToken.source();

    static getAllPost = async () => {
        const req = await api.get("/all");
        return req.data;
    };

    static addPost = async (title, description) => {
        const req = await api.post("/new", title, description);
        return req.data;
    };

    static delPost = async (id) => {
        const idJson = { "id": id }
        const req = await api.delete("/delete", idJson);
        return req.data

    };
}
