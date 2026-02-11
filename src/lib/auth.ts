import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins:[process.env.APP_URL || "http://localhost:3000"],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: true,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: true,
      },
      address: {
        type: "string",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false
  },
      socialProviders: {
        google: { 
            prompt: "select_account consent",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
            accessType: "offline"
            
        }, 
    },
});
