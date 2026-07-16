import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/database/schema/*.ts",
    out: "./src/database/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});

console.log(process.env.DATABASE_URL);