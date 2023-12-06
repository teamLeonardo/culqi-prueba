import { CulqiAxios } from "@/shared/axios.conf"
import { IBalance, IProvider } from "./payment.type"


export const GetBalance = async () => {
    return (await CulqiAxios.get("/getActualBalance")).data as IBalance
}


export const GetProviders = async () => {
    return (await CulqiAxios.get("/getProviders")).data as IProvider[]
}