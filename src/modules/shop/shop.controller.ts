import { Request, Response } from "express";
import { shopServices } from "./shop.service";


const getAllShops = async (req: Request, res: Response) => {   
    try {
        const shops = await shopServices.getAllShops();
        res.status(200).send({
            success: true,
            message: "Shops retrieved successfully",
            data: shops
        });
    }
    catch (error: any) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }   
}

const createShop = async (req : Request, res: Response) =>{
    const user = req.user

    if(!user){
        return res.status(401).send({
            success: false,
            message: "Unauthorized, please login as seller to create a shop"
        });
    }

    try {

        const result = await shopServices.createShop(req.body, user.id);
        
        res.status(201).send({
            success: true,
            message: "Shop created successfully",
            data : result
        });

    } catch (error : any) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

const updateShop = async (req: Request, res: Response) => {
    const { id } = req.params;
    

    try {
       const result = await shopServices.updateShop(Number(id), req.body);

       res.status(200).send({
        success: true,
        message: "Shop updated successfully",
        data: result
       }); 
    } catch (error: any) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

const deleteShop = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await shopServices.deleteShop(Number(id));

        res.status(200).send({
            success: true,
            message: "Shop deleted successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

const getShopMedicines = async (req: Request, res: Response) => {
    const { shopId } = req.params;  
    try {
        const medicines = await shopServices.getShopMedicines(Number(shopId));
        res.status(200).send({
            success: true,
            message: "Medicines retrieved successfully",
            data: medicines
        });
    }
    catch (error: any) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }

}


export const shopController = {
    createShop, 
    getAllShops,
    updateShop,
    deleteShop, 
    getShopMedicines
}