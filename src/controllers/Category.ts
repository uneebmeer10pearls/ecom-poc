import { Request, Response } from 'express';
import * as categoryModel from '../models/Category.js';
import { validationResult } from 'express-validator';

export const categories = async (req: Request, res: Response) => {
  return res.status(200).send(await categoryModel.getCategories())
}
export const addCategory = async (req: Request, res: Response) => {
  // return res.status(200).send(await categoryModel.getCategories())
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }

  const newCategory = await categoryModel.createCategory(req.body);
}

export const deleteCategory = async (req: Request, res: Response) => {
  return res.status(200).send("delete category")
}
