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


const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const updatedUser = await userServices.updateUser(id as string, data);
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedUser = await userServices.deleteUser(id as string);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
}



export const userController = {
    getAllUsers,
    updateUser,
    deleteUser
}