import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async createHouse(newHouse) {
        const res = await api.post('api/houses', newHouse)
        AppState.houses.push(new House(res.data))
        return res.data
    }
    async getHouses(){
        const res = await api.get('/api/houses')
        logger.log(res.data)
        AppState.houses = res.data 
    }
    async getHouseById(id) {
        const res = await api.get('api/houses/' + id)
        console.log('res', res.data);
        AppState.house = new House(res.data)
    }
    async removeHouse(id) {
        await api.delete('api/houses/' + id)
    }
}

export const housesService = new HousesService()