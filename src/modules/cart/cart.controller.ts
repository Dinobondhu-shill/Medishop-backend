import { Request, Response } from "express";
import { cartService } from "./cart.service";

const addToCart = async (req: Request, res: Response) => {
  const { medicineId, quantity } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Please Login for adding Cart",
    });
  }
  try {
    const result = await cartService.addToCart(userId, medicineId, quantity);
    return res.status(200).json({
      success: true,
      message: "Item added to cart successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Failed to add item to cart",
      error: error.message,
    });
  }
};

export const cartController = {
  addToCart,
};
