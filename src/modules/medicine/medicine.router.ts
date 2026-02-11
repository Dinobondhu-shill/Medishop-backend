import { Request, Response, Router } from "express";
import { medicineController } from "./medicine.controller";
import { auth, Role } from "../../middlewares/auth.middleware";


const router = Router();


router.get('/all-medicine', medicineController.getAllMedicine)
router.get('/medicine/:id', medicineController.getMedicineById);
router.post('/add-medicine',auth(Role.SELLER, Role.ADMIN),  medicineController.createMedicine)
router.patch('/update-medicine/:id', auth(Role.SELLER, Role.ADMIN), medicineController.updateMedicine)
router.patch('/update-medicine-stock/:id', auth(Role.SELLER, Role.ADMIN), medicineController.updateMedicineStock)
router.delete('/medicine/:id', auth(Role.ADMIN, Role.SELLER), medicineController.deleteMedicine)



export const medicineRouter = router;