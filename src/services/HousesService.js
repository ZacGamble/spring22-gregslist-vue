import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async createHouse() {
        
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
}

export const housesService = new HousesService()