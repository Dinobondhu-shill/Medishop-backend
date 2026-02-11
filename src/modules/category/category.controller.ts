import { Request, Response } from "express";
import { categoryServices } from "./category.service";
import { success } from "better-auth";


const createCategory = async (req: Request, res: Response) => {
    const data = req.body;

    try {
    const result = await categoryServices.createCategory(data);
    res.status(201).json({
        success: true,
         message: 'New Category Added Successfully',
            data: result
    });
    } catch (error: Error | any) {
        res.status(500).json({
             success: false,
            message: 'Failed to create category',
            error: error
        })
    }

};


export const categoryController = {
    createCategory
}