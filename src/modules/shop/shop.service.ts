import { prisma } from "../../lib/prisma";

const createShop = async (data: any) => {

    const newShop = await prisma.shop.create({
        data: data
    });

    return newShop;

}

export const shopServices = {
    createShop
}