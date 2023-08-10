"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../entity/car");
const data_source_1 = require("../data-source");
class CarService {
    constructor() {
        this.getAll = async () => {
            let result = await this.carRepository.find();
            return result;
        };
        this.add = async (product) => {
            let result = await this.carRepository.save(product);
            return result;
        };
        this.delete = async (id) => {
            let result = await this.carRepository.delete(id);
            return result;
        };
        this.update = async (id, data) => {
            return await this.carRepository.update(id, data);
        };
        this.save = async (data) => {
            return await this.carRepository.save(data);
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map