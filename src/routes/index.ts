import Router from '@koa/router';
import {
	createIngredient,
	getAllIngredients,
	getIngredientById,
	getIngredientByName, removeIngredient, updateIngredient
} from '../controllers/ingredients-controller';
import {Ingredient} from '../domain/ingredient';
import {describe} from 'node:test';

export default function router(): Router {
	const router = new Router();

	router.get('/ingredients', async (ctx) => {
		ctx.body = await getAllIngredients();
	});

	router.get('/ingredients/:id', async (ctx) => {
		const { id } = ctx.params;

		ctx.body = await getIngredientById(Number(id));
	});

	router.get('/ingredients/name/:name', async (ctx) => {
		const { name } = ctx.params;

		ctx.body = await getIngredientByName(name);
	});

	router.post('/ingredients', async (ctx) => {
		const payload = ctx.request.body as Pick<Ingredient, 'name' | 'description'>;

		ctx.body = await createIngredient(payload);
	});

	router.put('/ingredients/:id', async (ctx) => {
		const { id } = ctx.params;
		const payload = ctx.request.body as Pick<Ingredient, 'name' | 'description'>;

		ctx.body = await updateIngredient(id, payload);
	});

	router.delete('/ingredients/:id', async (ctx) => {
		const { id } = ctx.params;

		ctx.body = await removeIngredient(id);
	});

	return router;
}