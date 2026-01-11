import axios from "axios";

// const BASE_URL =
//     import.meta.env.MODE === "development"
//         ? import.meta.env.VITE_API_URL
//         : "/api";

const baseURL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
    baseURL,
    withCredentials: true, // send cookies with the request
});
