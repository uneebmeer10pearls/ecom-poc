import { Request, Response } from 'express';
import * as productModel from '../models/Product';
import { validationResult } from 'express-validator';

export const products = async (req: Request, res: Response) => {
  return res.status(200).send(await productModel.getProducts())
}
export const addProduct = async (req: Request, res: Response) => {
  return res.status(200).send("uneeb")
}