import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();



router.get('/category', categoryController.getAllCategories);
router.post('/add-category', categoryController.createCategory);
router.patch('/update-category/:id', categoryController.updateCategory);
router.delete('/delete-category/:id', categoryController.deleteCategory);

export const categoryRouter = router;