//controllers
import * as UserController from '../controllers/User.js'
import * as CategoryController from '../controllers/Category.js'
import * as ProductController from '../controllers/Product.js'

import { Request, Response } from 'express'
import { body } from 'express-validator'
import { validateJWTToken } from '../middleware/Auth.js'

import { Router } from 'express'
const app = Router();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World23");
});
 
app.post("/signup",[
    body('email').isEmail(),
    body('name').notEmpty().escape(),
    body('password').notEmpty().escape()
],UserController.signUp)

app.post("/login",[
    body('email').notEmpty().escape(),
    body('password').notEmpty().escape()
],UserController.login)

app.get("/users",validateJWTToken,UserController.users)

//products
app.get("/products",validateJWTToken,ProductController.products)

app.post("/addProduct",ProductController.addProduct)

//categories

app.get("/categories",validateJWTToken,CategoryController.categories)

app.post("/addCategory",[
    body('name').notEmpty().escape(),
    body('description').notEmpty().escape()
],validateJWTToken,CategoryController.addCategory)

app.put("/deleteCategory",validateJWTToken,CategoryController.deleteCategory)

export default app