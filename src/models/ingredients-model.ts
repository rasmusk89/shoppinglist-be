import { getConnection } from '../database/database';
import {Ingredient} from '../domain/ingredient';
import {TABLE_INGREDIENTS} from '../utils/constants';

export async function getAll(): Promise<Ingredient[]> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).select();
}

export async function getById(id: number): Promise<Ingredient> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).select().where({ id }).first();
}

export async function getByName(name: string): Promise<Ingredient> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).select().where({ name }).first();
}

export async function create(ingredient: Pick<Ingredient, 'name' | 'description'>): Promise<Ingredient> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).insert(ingredient);
}

export async function update(ingredient: Ingredient): Promise<Ingredient> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).where({ id: ingredient.id }).update({
		name: ingredient.name,
		description: ingredient.description
	});
}

export async function remove(id: number): Promise<Ingredient> {
	const db = await getConnection();

	return db(TABLE_INGREDIENTS).where({ id }).delete();
}