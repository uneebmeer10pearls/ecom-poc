import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function validateJWTToken(req:Request, res:Response,next:NextFunction){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token) return res.sendStatus(401)
    
    jwt.verify(token, `${process.env.JWT_TOKEN_PRIVATE_KEY}`,(error,user)=>{
        if(error) return res.sendStatus(403)
        req.user=user
        next()
    })
}