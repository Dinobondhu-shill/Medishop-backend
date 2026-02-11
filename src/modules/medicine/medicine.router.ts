import { Request, Response, Router } from "express";
import { medicineController } from "./medicine.controller";
import { auth, Role } from "../../middlewares/auth.middleware";


const router = Router();

router.get('/medicine', auth(Role.CUSTOMER, Role.SELLER, Role.ADMIN), (req:Request, res:Response) => {
    const user = req.user;
    res.send(`Medicine route is working! User: ${user?.name || 'Guest'}`);
});

router.post('/add-medicine',  medicineController.createMedicine)



export const medicineRouter = router;