import { Request, Response } from 'express';
import * as categoryModel from '../models/Category';
import { validationResult } from 'express-validator';

export const categories = async (req: Request, res: Response) => {
  return res.status(200).send(await categoryModel.getCategories())
}