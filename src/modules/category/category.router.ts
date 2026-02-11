import { Router } from "express";
import { categoryController } from "./category.controller";
import { auth, Role } from "../../middlewares/auth.middleware";

const router = Router();



router.get('/category', categoryController.getAllCategories);
router.post('/add-category', auth(Role.ADMIN), categoryController.createCategory);
router.patch('/update-category/:id', auth(Role.ADMIN), categoryController.updateCategory);
router.delete('/delete-category/:id', auth(Role.ADMIN), categoryController.deleteCategory);

export const categoryRouter = router;