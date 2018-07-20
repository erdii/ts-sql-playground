import * as convict from "convict";

export const config = convict({
	env: {
		doc: "the app envorinment",
		default: "development",
		format: ["development", "production", "test"],
		env: "NODE_ENV",
	},

	postgres: {
		table: {
			doc: "the postgres table to use",
			format: String,
			default: "tools",
			env: "POSTGRES_TABLE",
			arg: "postgres-table",
		},
		user: {
			doc: "the postgres authentication user",
			format: String,
			default: "postgres",
			env: "POSTGRES_USER",
		},
		password: {
			doc: "the postgres authentication password",
			format: String,
			default: "",
			env: "POSTGRES_PASSWORD",
			sensitive: true,
		},
		database: {
			doc: "postgres database",
			format: String,
			default: "postgres",
			env: "POSTGRES_DATABASE",
		},
		host: {
			doc: "postgres db server host",
			format: String,
			default: "localhost",
			env: "POSTGRES_HOST",
		},
		port: {
			doc: "postgres db server port",
			format: "port",
			default: 5432,
			env: "POSTGRES_PORT",
		},
		min: {
			doc: "minimal count of connections",
			format: "nat",
			default: 2,
			env: "POSTGRES_MIN",
		},
		max: {
			doc: "maximal count of connections",
			format: "nat",
			default: 2,
			env: "POSTGRES_MAX",
		},
		idleTimeoutMillis: {
			doc: "query timeout",
			format: "nat",
			default: 1000,
			env: "POSTGRES_TIMEOUT",
		},
	},

	mysql: {
		user: {
			doc: "the mysql authentication user",
			format: String,
			default: "root",
			env: "MYSQL_USER",
		},
		password: {
			doc: "the mysql authentication password",
			format: String,
			default: "",
			env: "MYSQL_PASSWORD",
			sensitive: true,
		},
		database: {
			doc: "mysql database",
			format: String,
			default: "mysql",
			env: "MYSQL_DATABASE",
		},
		host: {
			doc: "mysql db server host",
			format: String,
			default: "localhost",
			env: "MYSQL_HOST",
		},
		port: {
			doc: "mysql db server port",
			format: "port",
			default: 3306,
			env: "MYSQL_PORT",
		},
		connectionLimit: {
			doc: "maximal count of connections",
			format: "nat",
			default: 10,
			env: "MYSQL_MAX",
		},
	},
});

config.validate({
	allowed: "strict",
});

export function isDevEnv(): boolean {
	return config.get("env") === "development";
}
