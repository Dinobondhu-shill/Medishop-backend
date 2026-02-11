import { prisma } from "../../lib/prisma"


const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const updateUser = async (id: string, data: any) => {
    const updatedUser = await prisma.user.update({
        where: { id },
        data: data
    });
    return updatedUser;
}

const deleteUser = async (id: string) => {
    const deletedUser = await prisma.user.delete({
        where: { id }
    });
    return deletedUser;
}
export const userServices = {
    getAllUsers,
    updateUser,
    deleteUser
}