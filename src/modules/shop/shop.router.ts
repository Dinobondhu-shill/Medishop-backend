import { Request, Response, Router } from "express";
import { shopController } from "./shop.controller";
import { auth, Role } from "../../middlewares/auth.middleware";

const router = Router();

// Example route for getting all products
router.post("/create-shop", auth(Role.ADMIN, Role.SELLER), shopController.createShop);




export { router as shopRouter };