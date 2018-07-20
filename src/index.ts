import { createLogger } from "./logging";
// import * as Postgres from "./postgres";
// import * as Mysql from "./mysql";

const log = createLogger("index");

async function main() {
	log("welcome");
	// await Postgres.init();
	// await Mysql.init();

	// await Postgres.destroy();
	// await Mysql.destroy();
	// process.exit(0);
}

// run the app
// but exit in case of
// an uncatched error
main().catch(err => {
	console.error("An uncatched error occured:", err);
	process.exit(1);
});
