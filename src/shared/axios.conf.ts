import axios from "axios"

export const platziAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_API
})