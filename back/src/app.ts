import { index } from './table';
const koa = require('koa');
// const websockify = require('koa-websocket');
const router = require('koa-router');
import * as bodyParser from 'koa-bodyparser';

const app = new koa();
app.use(bodyParser());

// const api = new router();
// const apiSocket = new router()

// websockify(app);

// apiSocket.get('/api/', (ctx) => {
//   ctx.websocket.send('Hello World');
//   ctx.websocket.on('message', (message) => console.log(message));
// })

var api = new router({ prefix: '/api/template' });
api.post("/table", index)

app.use(api.routes()).use(api.allowedMethods());
// app.ws.use(apiSocket.routes()).use(apiSocket.allowedMethods());

app.listen(3001);