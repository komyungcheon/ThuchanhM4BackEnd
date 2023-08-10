import {Router} from "express";

import carController from "../controller/carController";

const carRouter = Router();
//API CRUD lớp:
carRouter.get('/', carController.findAll);
carRouter.post('/', carController.add);
carRouter.delete('/:id', carController.delete);
carRouter.put('/:id', carController.update);

export default carRouter;