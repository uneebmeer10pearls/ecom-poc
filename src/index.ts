import express, { Application } from 'express';
import 'dotenv/config'
import routes from './routes/web.js'

const app: Application = express();
app.use(express.json());

//importing routes
app.use(routes); 

export default app
