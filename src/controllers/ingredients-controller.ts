import { Ingredient } from '../domain/ingredient';
import * as ingredientsModel from '../models/ingredients-model';
export async function getAllIngredients(): Promise<Ingredient[]> {
	return await ingredientsModel.getAll();
}

export async function getIngredientById(id: number): Promise<Ingredient> {
	return await ingredientsModel.getById(id);
}

export async function getIngredientByName(name: string): Promise<Ingredient> {
	return await ingredientsModel.getByName(name);
}

export async function createIngredient(ingredient: Pick<Ingredient, 'name' | 'description'>): Promise<Ingredient> {
	return await ingredientsModel.create(ingredient);
}

export async function updateIngredient(id: string, payload: Pick<Ingredient, 'name' | 'description'>): Promise<Ingredient> {
	const ingredient = {
		id: Number(id),
		...payload,
	}
	return await ingredientsModel.update(ingredient);
}

export async function removeIngredient(id: string): Promise<Ingredient> {
	return await ingredientsModel.remove(Number(id));
}