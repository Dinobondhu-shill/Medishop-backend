import { Router } from "express";
import { auth, Role} from "../../middlewares/auth.middleware";
import { userController } from "./user.controller";


const router = Router();

router.get('/all-users', auth(Role.ADMIN), userController.getAllUsers)
router.patch('/update-user/:id', auth(Role.ADMIN), userController.updateUser)
router.delete('/delete-user/:id', auth(Role.ADMIN), userController.deleteUser)


export const userRouter = router;