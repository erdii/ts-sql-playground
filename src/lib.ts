import { createLogger } from "./logging";
import fetch from "node-fetch";

const log = createLogger("lib");

/**
 * get current unix timestamp in seconds
 *
 * @export
 * @returns {number} unix second timestamp
 */
export function getEpoch() {
	return Math.floor(Date.now() / 1000);
}

/**
 * convert a js timestamp (milliseconds) to a unix timestamp (seconds)
 *
 * @export
 * @param {number} jsTimestamp js millisecond timestamp
 * @returns {number} unix second timestamp
 */
export function toEpoch(jsTimestamp: number) {
	return Math.floor(jsTimestamp / 1000);
}

/**
 * get a json via http request
 *
 * @async
 * @param {string} url
 * @returns response body parsed as json
 */
export async function getJSON(url: string) {
	const response = await fetch(url);

	if (!response.ok) {
		const err = new Error("ERESPONSE");
		(err as any).response = response;
		throw err;
	}

	return await response.json();
}

/**
 * promisified sleep
 *
 * @export
 * @param {number} seconds time to sleep
 */
export function sleep(seconds: number) {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
