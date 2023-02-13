import Koa from 'koa';
import router from './routes';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser()).use(router().routes());

export default app;
