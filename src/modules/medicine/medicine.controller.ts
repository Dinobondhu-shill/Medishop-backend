import { Request, Response } from "express";
import { medicineServices } from "./medicine.service";

const createMedicine = async (req: Request, res: Response) => {
    const data = req.body;
    const user = req.user;

    if(!user) { 
        return res.status(401).json({
            message: 'Unauthorized, Only Seller can add medicine'
        })
    }
    

   try {
       const result = await medicineServices.createMedicine(data, user.id as string);

       res.status(201).json({
           message: 'New Medicine Added Successfully',
           data: result
       })
   } catch (error) {
         res.status(500).json({ 
            message: 'Failed to create medicine',
            error: error ,
            data: error
        })
   }
}

export const medicineController = {
    createMedicine

};