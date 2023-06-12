import { Request, Response } from 'express';
import * as userModel from '../models/User.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs'
import * as helper from '../utils/helper.js'

export const login = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  console.log(req.body)
  const { email,password } = req.body

  const getUser = await userModel.getUser({
    email:email
  });
  if(!getUser['data']){
    return res.status(400).send("User Not Found!");
}

const verifyPassword = await bcrypt.compareSync(password, getUser['data']['password']);
  if(verifyPassword){
    return res.status(200).send({
      token: helper.createJWTToken(getUser)
    })
  }else{
    return res.status(400).send({
      message: "invalid password"
    })
  }
};

export const signUp = async (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: result.array()
    });
  }
  let { password } = req.body

  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = await userModel.createAccount({
    name:req.body.name,
    password:hashedPassword,
    email:req.body.email
  });
  if(newUser && newUser.status==400){
    return res.status(400).send(newUser.error);
  }
  if(newUser && newUser.status==200){
    delete newUser['data']['password']; 
    let token = helper.createJWTToken(newUser)
    newUser['data']['token '] = token
    return res.status(200).send(newUser);
  }
};

export const users = async (req: Request, res: Response) => {
  return res.status(200).send(await userModel.getUsers())
};