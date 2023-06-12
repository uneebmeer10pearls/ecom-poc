import { Request, Response } from 'express';
import * as productModel from '../models/Product.js';
import { validationResult } from 'express-validator';

export const products = async (req: Request, res: Response) => {
  return res.status(200).send(await productModel.getProducts())
}
export const addProduct = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  const addProduct = await productModel.addProduct(req.body);
  return (addProduct && addProduct.status==200) ? res.status(200).send(addProduct) : res.status(400).send(addProduct)
}
export const deleteProduct = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  const deleteProduct = await productModel.deleteProduct({id:req.params.id});
  return (deleteProduct && deleteProduct.status==200) ? res.status(200).send(deleteProduct) : res.status(400).send(deleteProduct)
}
export const updateProduct = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  const updateProduct = await productModel.updateProduct({id:req.params.id,name:req.body.name,description:req.body.namedescription});
  return (updateProduct && updateProduct.status==200) ? res.status(200).send(updateProduct) : res.status(400).send(updateProduct)
}