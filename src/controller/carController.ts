import {Request, Response} from "express";
import carService from "../service/carService";


class CarController {

    findAll = async (req: Request, res: Response) => {
        let listProduct = await carService.getAll();
        res.json(listProduct);
    }

    add = async (req: Request, res: Response) => {
        let listProduct = await carService.add(req.body);
        res.json(listProduct);
    }

    delete = async (req: Request, res: Response) => {
        let result1 = await carService.delete(req.body.id);
        res.json(result1);
    }


    update = async (req: Request, res: Response) => {
        await carService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
}

export default new CarController();
