import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from "../lib/auth";

export enum Role {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
  ADMIN = "ADMIN"
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
                name: string;
                phone?: string | undefined;
            }
        }
    }
}


export const auth = (...roles : Role[]) =>{
    return async (req:Request, res:Response, next:NextFunction) => {
        console.log("Auth middleware called");

        const session = await betterAuth.api.getSession({
            headers: req.headers as any,
        });

        if (!session) {
            console.log("No session found");
            return res.status(401).json({
                 success: false,
                 message: "Unauthorized" 
                });
        }

        req.user = {
            id: session.user.id,
            email: session.user.email,
            role: session.user.role,
            name: session.user.name,
            phone: session.user.phone || undefined,
        };

        if(roles.length > 0 && !roles.includes(req.user.role as Role)) {
            console.log(`User role ${req.user.role} is not authorized to access this route`);
            return res.status(403).json({
                success: false,
                message: "Forbidden, You don't have enough permission for access"
            });
        }

        next();
    }
}
