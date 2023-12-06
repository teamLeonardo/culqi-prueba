import { CulqiAxios } from "@/shared/axios.conf"


export const GetBalance = async () => {
    return (await CulqiAxios.get("/getActualBalance")).data
}


export const GetProviders = async () => {
    return (await CulqiAxios.get("/getProviders")).data
}