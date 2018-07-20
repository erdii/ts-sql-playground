import * as mysql from "mysql";
import { config } from "./config";
import { createLogger } from "./logging";

const log = createLogger("mysql");
export let pool: mysql.Pool = null;

export async function init() {
	const mySqlConfig = config.get("mysql");
	pool = mysql.createPool(mySqlConfig);

	const time = await query("SELECT NOW() as now");

	log("mysql client initialized. mysql server time:", time[0].now);
}

export function query<T = any>(queryString: string, params: any[] = []): Promise<T[]> {
	return new Promise((resolve, reject) => {
		pool.query(queryString, params, (error, results) => {
			if (error != null) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});
}

export function destroy() {
	return new Promise((resolve, reject) => {
		pool.end((err) => {
			if (err != null) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}
