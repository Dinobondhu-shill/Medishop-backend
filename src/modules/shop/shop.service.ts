import { prisma } from "../../lib/prisma";



const getAllShops = async () => {
    const shops = await prisma.shop.findMany();
    return shops;
}


const createShop = async (data: any, sellerId: string) => {

    const newShop = await prisma.shop.create({
        data: { ...data, sellerId }
    });

    return newShop;

}

const updateShop = async (id: number, data: any) => {
    const updatedShop = await prisma.shop.update({
        where: { id },
        data
    });

    return updatedShop;
}

const deleteShop = async (id: number) => {
    const deletedShop = await prisma.shop.delete({
        where: { id }
    });

    return deletedShop;
}


const getShopMedicines = async (shopId: number) => {
    const medicines = await prisma.medicine.findMany({
        where: { shopId }
    });
    return medicines;
};

export const shopServices = {
    createShop,
    getAllShops,
    updateShop,
    deleteShop,
    getShopMedicines
}