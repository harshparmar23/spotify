import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:6900/api",
})