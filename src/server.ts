import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    prisma.$disconnect();
    process.exit(1);
  }
}

main();
