import { Request, Response } from "express"
import { userServices } from "./user.service";


const getAllUsers = async (req:Request, res:Response) => {

try {
    const allUsers = await userServices.getAllUsers();
    res.status(200).json({
        success: true,        
        message: 'Users fetched successfully',
        data: allUsers  
    });
} catch (error : any) {
    res.status(500).json({
        success: false,
         message: 'Error fetching users',
         error : error.message
        });   
}


}




export const userController = {
    getAllUsers
}