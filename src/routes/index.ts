import Router from '@koa/router';
import { getAllIngredients } from './getAllIngredients';
import { getIngredient } from './getIngredient';

export default function router(): Router {
	const router = new Router();

	router.get('/all', async (ctx) => {
		const ingredients = await getAllIngredients();
		console.log(ingredients);
		ctx.body = ingredients;
	});

	router.get('/one', async (ctx) => {
		ctx.body = await getIngredient();
	});

	return router;
}