//controllers
import * as userController from '../controllers/User';
import * as CategoryController from '../controllers/Category';

import { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateJWTToken } from '../middleware/Auth'

const { Router } = require('express');
const app = Router();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});
 
app.post("/signup",[
    body('email').isEmail(),
    body('name').notEmpty().escape()
],userController.signUp)

app.post("/login",[
    body('email').notEmpty().escape(),
    body('password').notEmpty().escape()
],userController.login)

app.get("/users",validateJWTToken,userController.users)
app.post("/categories",validateJWTToken,CategoryController.categories)
  
module.exports = app;