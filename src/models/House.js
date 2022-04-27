export class House {
    constructor(data = {}) {
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.levels = data.levels
    this.id = data.id
    this.year = data.year
    }
}