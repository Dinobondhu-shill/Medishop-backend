
import { Category } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const getAllCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
}

const createCategory = async (data: Category) => {
    console.log('Category service is working!')
    const newCategory = await prisma.category.create({
        data: data
    });
    return newCategory;
}


const updateCategory = async (id: number, data: Partial<Category>) => { 
    const updatedCategory = await prisma.category.update({
        where: { id },
        data: data
    });
    return updatedCategory;
}

const deleteCategory = async (id: number) => {  
    const deletedCategory = await prisma.category.delete({
        where: { id }
    });
    return deletedCategory;
}

export const categoryServices = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
};