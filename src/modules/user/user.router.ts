import { Router } from "express";
import { auth, Role} from "../../middlewares/auth.middleware";
import { userController } from "./user.controller";


const router = Router();

router.get('/all-users', auth(Role.ADMIN), userController.getAllUsers)



export const userRouter = router;