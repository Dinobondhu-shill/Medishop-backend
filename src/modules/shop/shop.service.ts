import { prisma } from "../../lib/prisma";

const createShop = async (data: any, sellerId: string) => {

    const newShop = await prisma.shop.create({
        data: { ...data, sellerId }
    });

    return newShop;

}

export const shopServices = {
    createShop
}