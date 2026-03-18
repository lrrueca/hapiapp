import { Database } from "bun:sqlite";
import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";

const sqliteDB = new Database(String(process.env.DB));
export const db: BunSQLiteDatabase = drizzle(sqliteDB);
