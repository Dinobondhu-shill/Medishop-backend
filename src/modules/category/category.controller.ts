import { Request, Response } from "express";
import { categoryServices } from "./category.service";
import { success } from "better-auth";


const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await categoryServices.getAllCategories();   

        res.status(200).json({
            success: true,
            message: 'Categories fetched successfully',
            data: result
        });
    } catch (error: Error | any) {
        res.status(500).json({
            success: false, 
            message: 'Failed to fetch categories',
            error: error.message
        });
    }

}


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


const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
    try {
        const result = await categoryServices.updateCategory(id, data);
        res.status(200).json({
            success: true,
            message: 'Category updated successfully',
            data: result
        });
    } catch (error: Error | any) {
        res.status(500).json({
            success: false,
            message: 'Failed to update category',
            error: error.message
        });
    }
}


const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;  
    try {
        const result = await categoryServices.deleteCategory(id);
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully',
            data: result
        });
    } catch (error: Error | any) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete category',
            error: error.message
        });
    }  
}



export const categoryController = {
    createCategory,
    getAllCategories,
    updateCategory, 
    deleteCategory
}