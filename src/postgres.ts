import * as Pool from "pg-pool";
import { createLogger } from "./logging";
import { config } from "./config";

const log = createLogger("postgres");

export let pool: Pool.Pool = null;

export async function init() {
	// get connection configuration
	const pgConfig = config.get("postgres");

	// create connection pool
	pool = new (Pool as any)(pgConfig);

	// verify connection
	const time = await this.pool.query("SELECT NOW()");
	log("postgres client initialized. pg server time:", time.rows[0].now);
}

export async function destroy() {
	await pool.end();
}
