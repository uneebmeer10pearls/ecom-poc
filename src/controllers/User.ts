import { Request, Response } from 'express';
import * as userModel from '../models/User';
import { validationResult,matchedData } from 'express-validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const loginOne = async (req: Request, res: Response) => {
    // try {
    //   const foundUser = await userServices.login(req.body);
    //   res.status(200).send(foundUser);
    // } catch (error) {
      return res.status(500).send("test");
    // }
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
const hashedPassword = await new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) reject(err)
    resolve(hash)
  });
})  

const newUser = await userModel.createAccount({
    name:req.body.name,
    password:hashedPassword,
    email:req.body.email
  });
  if(newUser && newUser.status==400){
    res.status(400).send(newUser.error);
  }
  if(newUser && newUser.status==200){
    // delete newUser['data']['password']; 
    let token = jwt.sign(newUser, `${process.env.JWT_TOKEN_PRIVATE_KEY}`, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    // newUser?.data?.token = token
    res.status(200).send(newUser);
  }
};