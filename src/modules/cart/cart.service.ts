import { prisma } from "../../lib/prisma";

async function getOrCreateCart(userId: string) {
    const result = await prisma.cart.findUnique({
        where: { userId },
    })
    if (result) {
        return result;
    }
    return await prisma.cart.create({
        data: { userId },
    })
}  

const addToCart = async (userId: string, medicineId: number, quantity: number) => {
    
    const cart = await getOrCreateCart(userId);
    const existingItem = await prisma.cartItem.findFirst({
        where: {
            cartId: cart.id,
            medicineId,
        },
    });
    if (existingItem) {
        return await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + quantity },
        });
    }
    return await prisma.cartItem.create({
        data: {
            cartId: cart.id,
            medicineId,
            quantity,
        },
    });
}

export const cartService = {
 addToCart
}