import * as userController from '../controllers/User';
import express, { Application, Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

const { Router } = require('express');
const app = Router();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});
 
app.post("/signup",[
    body('email').isEmail(),
    body('name').notEmpty().escape()
],userController.signUp)
  
module.exports = app;