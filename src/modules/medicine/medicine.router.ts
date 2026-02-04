import { Request, Response, Router } from "express";
import { medicineController } from "./medicine.controller";


const router = Router();

router.get('/medicine', (req:Request, res:Response) => {
    res.send('Medicine route is working!');
});

router.post('/add-medicine',  medicineController.createMedicine)



export const medicineRouter = router;