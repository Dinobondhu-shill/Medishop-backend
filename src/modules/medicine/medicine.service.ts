import { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const getAllMedicine = async () => {
  const medicine = await prisma.medicine.findMany();
  return medicine;
};

const createMedicine = async (data: Medicine, sellerId: string) => {
  const newMedicine = await prisma.medicine.create({
    data: {
      ...data,
      sellerId: sellerId,
    },
  });

  return newMedicine;
};

const getMedicineById = async (medicineId: number) => {
  const medicine = await prisma.medicine.findUnique({
    where: {
      id: medicineId,
    },
  });

  return medicine;
};

const updateMedicine = async (medicineId: number, data: Partial<Medicine>) => {
  const updatedMedicine = await prisma.medicine.update({
    where: {
      id: medicineId,
    },
    data: {
      ...data,
    },
  });
  return updatedMedicine;
};

const updateMedicineStock = async (medicineId: number, addStock: number) => {
  const updatedMedicine = await prisma.medicine.update({
    where: {    
        id: medicineId,
    },
    data: {
      stock:{
        increment: addStock,
      },
    },
  });
  return updatedMedicine;
}

const deleteMedicine = async (medicineId: number) => {
  const deletedMedicine = await prisma.medicine.delete({
    where: {
      id: medicineId,
    },
  });

  return deletedMedicine;
};

export const medicineServices = {
  getAllMedicine,
  createMedicine,
  getMedicineById,
  updateMedicine,
  updateMedicineStock,
  deleteMedicine,
};
