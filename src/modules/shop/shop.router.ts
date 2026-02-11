import { Request, Response, Router } from "express";
import { shopController } from "./shop.controller";
import { auth, Role } from "../../middlewares/auth.middleware";

const router = Router();



router.get("/shops", shopController.getAllShops);
router.post("/create-shop", auth(Role.ADMIN, Role.SELLER), shopController.createShop);
router.patch("/update-shop/:id", auth(Role.ADMIN, Role.SELLER), shopController.updateShop);
router.delete("/delete-shop/:id", auth(Role.ADMIN), shopController.deleteShop);

router.get('/get-shop-medicines/:shopId', shopController.getShopMedicines);


export { router as shopRouter };