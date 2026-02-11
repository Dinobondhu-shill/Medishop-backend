import express, { Application, Request, Response } from "express";
import cors from "cors";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { categoryRouter } from "./modules/category/category.router";
import { shopRouter } from "./modules/shop/shop.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { userRouter } from "./modules/user/user.router";
import { cartRouter } from "./modules/cart/cart.router";

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/v1", medicineRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", shopRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1/cart", cartRouter);

export default app;
