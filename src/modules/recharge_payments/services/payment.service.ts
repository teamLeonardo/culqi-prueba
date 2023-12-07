import { CulqiAxios } from "@/shared/axios.conf"
import { IBalance, IProvider } from "./payment.type"


export const GetBalance = async () => {
    return (await CulqiAxios.get("/getActualBalance")).data.data as IBalance
}


export const GetProviders = async () => {
    return (await CulqiAxios.get("/getProviders")).data.data.companies as IProvider[]
}