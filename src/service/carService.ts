import {Car} from "../entity/car";
import {AppDataSource} from "../data-source";

class CarService {
    private carRepository;
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car);
    }

    getAll = async () => {
        let result = await this.carRepository.find();
        return result;
    }


    add = async (product) => {
        let result = await this.carRepository.save(product);
        return result;
    }

    delete = async (id) =>{
        let result = await this.carRepository.delete(id);
        return result;
    }
    update = async (id, data) => {
        return await this.carRepository.update(id, data);
    }
    save = async (data) => {
        return await this.carRepository.save(data)
    }


}

export default new CarService();

