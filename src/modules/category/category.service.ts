
import { Category } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createCategory = async (data: Category) => {
    console.log('Category service is working!')
    const newCategory = await prisma.category.create({
        data: data
    });
    return newCategory;
}


export const categoryServices = {
    createCategory
};