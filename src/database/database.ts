import knex, { Knex } from 'knex';
import { DATABASE } from '../utils/constants';

export async function getConnection(): Promise<Knex> {
	return knex({
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: DATABASE,
		}
	});
}