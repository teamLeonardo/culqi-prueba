import axios from "axios"

export const CulqiAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` }
})