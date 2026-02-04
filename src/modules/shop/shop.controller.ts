import { Request, Response } from "express";
import { shopServices } from "./shop.service";

const createShop = async (req : Request, res: Response) =>{
    try {

        const result = await shopServices.createShop(req.body);
        
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


export const shopController = {
    createShop
}