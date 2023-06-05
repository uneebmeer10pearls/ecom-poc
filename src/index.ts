import express, { Application } from 'express';
import 'dotenv/config'

const app: Application = express();
app.use(express.json());

//importing routes
app.use(require('./routes/web')); 
    
app.listen(process.env.SERVER_PORT,() => {
    console.log(`Server Started at localhost:${process.env.SERVER_PORT}`);
});