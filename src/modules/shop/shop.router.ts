import { Request, Response, Router } from "express";
import { shopController } from "./shop.controller";

const router = Router();

// Example route for getting all products
router.post("/create-shop", shopController.createShop);




export { router as shopRouter };