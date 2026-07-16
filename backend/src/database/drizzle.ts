import { drizzle } from "drizzle-orm/node-postgres";
import { config as loadEnv } from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Pool } from "pg";

const envCandidates = [
    resolve(process.cwd(), ".env"),
    resolve(process.cwd(), "backend/.env"),
    resolve(__dirname, "../../.env"),
];

const envPath = envCandidates.find((candidate) => existsSync(candidate));
if (envPath) {
    loadEnv({ path: envPath });
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error(
        "DATABASE_URL is missing. Set it in backend/.env (or .env in current working directory).",
    );
}

const pool = new Pool({
    connectionString: databaseUrl,
});

export const db = drizzle(pool);