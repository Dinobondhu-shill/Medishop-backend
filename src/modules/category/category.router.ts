import { Router } from "express";
import { categoryController } from "./category.controller";


const router = Router();

router.post('/add-category', categoryController.createCategory);

export const categoryRouter = router;