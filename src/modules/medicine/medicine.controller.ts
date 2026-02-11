import { Request, Response } from "express";
import { medicineServices } from "./medicine.service";
import { prisma } from "../../lib/prisma";

const getAllMedicine = async (req: Request, res: Response) => {
    try {
        const result = await medicineServices.getAllMedicine();
        res.status(200).json({
            success: true,
            message: "Medicine retrieved successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve medicine",
            error: error,
        });
    }
};


const createMedicine = async (req: Request, res: Response) => {
    const data = req.body;
    const user = req.user;

    if (!user) {
        return res.status(401).json({
            message: "Unauthorized, Only Seller can add medicine",
        });
    }

    try {
        const result = await medicineServices.createMedicine(
            data,
            user.id as string,
        );

        res.status(201).json({
            message: "New Medicine Added Successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create medicine",
            error: error,
            data: error,
        });
    }
};


const getMedicineById = async (req: Request, res: Response) => {
    const medicineId = parseInt(
        typeof req.params.id === "string" ? req.params.id : "",
    );

    try {
        const result = await medicineServices.getMedicineById(medicineId as number);

        res.status(200).json({
            success: true,
            message: "Medicine retrieved successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve medicine",
            error: error,
        });
    }
};


const updateMedicine = async (req: Request, res: Response) => {
    const medicineId = parseInt(
        typeof req.params.id === "string" ? req.params.id : "",
    );
    const data = req.body;
    const user = req.user;
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized, Only Seller or Admin can update medicine",
        });
    }

    try {

        const result = await medicineServices.updateMedicine(medicineId, data)
        res.status(200).json({
            success: true,
            message: "Medicine updated successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update medicine",
            error: error,
        });
    }
}


const updateMedicineStock = async (req: Request, res: Response) => {
    const medicineId = parseInt(
        typeof req.params.id === "string" ? req.params.id : "",
    );
    const { stock } = req.body;
    const user = req.user;  
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized, Only Seller or Admin can update medicine stock",
        });
    }   
    
    try {
        const result = await medicineServices.updateMedicineStock(medicineId, stock);
        res.status(200).json({
            success: true,
            message: "Medicine stock updated successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update medicine stock",
            error: error,
        });
    }

}


const deleteMedicine = async (req: Request, res: Response) => {
    const medicineId = parseInt(
        typeof req.params.id === "string" ? req.params.id : "",
    );
    try {
        const result = await medicineServices.deleteMedicine(medicineId as number);

        res.status(200).json({
            message: "Medicine deleted successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete medicine",
            error: error,
        });
    }
};

export const medicineController = {
    getAllMedicine,
    createMedicine,
    getMedicineById,
    updateMedicine,
    updateMedicineStock,
    deleteMedicine,
};
