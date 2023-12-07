import axios from "axios"

const CulqiAxios = axios.create({
    baseURL: "https://corsproxy.io/?" + import.meta.env.VITE_BASE_API, 
    headers : {
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
        // 'Access-Control-Allow-Origin': '*',
        // 'origin': 'x-requested-with',
        // 'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        // 'Content-Type': 'application/json',
        // 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
    }
});


export {
    CulqiAxios
}