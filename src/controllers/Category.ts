import { Request, Response } from 'express';
import * as categoryModel from '../models/Category.js';
import { validationResult } from 'express-validator';

export const categories = async (req: Request, res: Response) => {
  return res.status(200).send(await categoryModel.getCategories())
}
export const addCategory = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }

  const newCategory = await categoryModel.createCategory(req.body);
  return (newCategory && newCategory.status==200) ? res.status(200).send(newCategory) : res.status(400).send(newCategory)
}

export const deleteCategory = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  const deleteCategory = await categoryModel.deleteCategory({id:req.params.id});
  return (deleteCategory && deleteCategory.status==200) ? res.status(200).send(deleteCategory) : res.status(400).send(deleteCategory)
}
export const updateCategory = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  const updateCategory = await categoryModel.updateCategory({id:req.params.id,name:req.body.name,description:req.body.namedescription});
  return (updateCategory && updateCategory.status==200) ? res.status(200).send(updateCategory) : res.status(400).send(updateCategory)
}

