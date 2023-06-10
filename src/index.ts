import express, { Application } from 'express';
import 'dotenv/config'

const app: Application = express();
app.use(express.json());

//importing routes
app.use(require('./routes/web')); 

export default app
