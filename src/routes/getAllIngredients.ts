import { getData } from '../database/database';

export async function getAllIngredients(): Promise<Record<string, unknown>[]> {
	const query = 'SELECT * FROM ingredients';

	return await getData(query) as Record<string, unknown>[];
}
