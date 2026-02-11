
import { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createMedicine = async(data: Medicine, sellerId: string) => {

 
    const newMedicine = await prisma.medicine.create({
        data: {
            ...data,
            sellerId: sellerId
        }
    });

    return newMedicine;

}   

export const medicineServices = {
    createMedicine
};
