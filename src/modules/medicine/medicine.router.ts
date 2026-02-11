import { Request, Response, Router } from "express";
import { medicineController } from "./medicine.controller";
import { auth, Role } from "../../middlewares/auth.middleware";


const router = Router();

router.get('/medicine', (req:Request, res:Response) => {
    const user = req.user;
    res.send(`Medicine route is working! User: ${user?.name || 'Guest'}`);
});

router.post('/add-medicine',auth(Role.SELLER, Role.ADMIN),  medicineController.createMedicine)



export const medicineRouter = router;