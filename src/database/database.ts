const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'shopping_list'
});

async function queryDatabase(query: string): Promise<unknown> {
	return new Promise((resolve, reject) => {
		connection.query(query, (error: unknown, results: any) => {
			if (error) {
				return reject(error);
			}
			resolve(results);
		});
	});
}

export async function getData(query: string): Promise<unknown> {
	try {
		return await queryDatabase(query);
	} catch (error) {
		console.error(error);

		return []
	} finally {
		connection.end();
	}
}
