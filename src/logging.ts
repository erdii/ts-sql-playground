/**
 * rudimentary logger
 * @param name module name
 */
export function createLogger(name: string) {
	return function(message?: any, ...optionalParams: any[]) {
		console.log(`[${name}] ${message}`, ...optionalParams);
	};
}
