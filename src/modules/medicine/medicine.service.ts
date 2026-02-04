
import { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createMedicine = async(data: Medicine) => {

 
    const newMedicine = await prisma.medicine.create({
        data: data
    });

    return newMedicine;

}   

export const medicineServices = {
    createMedicine
};
