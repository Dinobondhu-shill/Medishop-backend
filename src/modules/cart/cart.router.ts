import { Router } from "express";
import { cartController } from "./cart.controller";
import { auth, Role } from "../../middlewares/auth.middleware";

const router = Router();


router.post('/add-to-cart', auth(Role.CUSTOMER, Role.SELLER), cartController.addToCart);

export const cartRouter = router; 