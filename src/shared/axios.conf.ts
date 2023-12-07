import axios from "axios"

const CulqiAxios = axios.create({
    baseURL: "https://corsproxy.io/?" + import.meta.env.VITE_BASE_API, 
    headers : {
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
    }
});


export {
    CulqiAxios
}