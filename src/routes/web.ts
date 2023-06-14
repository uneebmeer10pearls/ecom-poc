//controllers
import * as UserController from '../controllers/User.js'
import * as CategoryController from '../controllers/Category.js'
import * as ProductController from '../controllers/Product.js'

import { Request, Response } from 'express'
import { body,check } from 'express-validator'
import { validateJWTToken } from '../middleware/Auth.js'

import { Router } from 'express'
const app = Router();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world Amir2");
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

//categories

app.get("/categories",validateJWTToken,CategoryController.categories)

app.post("/addCategory",[
    body('name').notEmpty().escape(),
    body('description').notEmpty().escape()
],validateJWTToken,CategoryController.addCategory)

app.put("/deleteCategory/:id",[check('id').not().isEmpty()],validateJWTToken,CategoryController.deleteCategory)

app.put("/updateCategory/:id",[check('id').not().isEmpty()],validateJWTToken,CategoryController.updateCategory)

//products
app.get("/products",validateJWTToken,ProductController.products)

app.post("/addProduct",[
    body('name').notEmpty().escape(),
    body('description').notEmpty().escape(),
    body('category_id').notEmpty().escape()
],ProductController.addProduct)

app.put("/deleteProduct/:id",[check('id').not().isEmpty()],validateJWTToken,ProductController.deleteProduct)

app.put("/updateProduct/:id",[check('id').not().isEmpty()],validateJWTToken,ProductController.updateProduct)

export default app