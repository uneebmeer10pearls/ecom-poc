import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
// const jwt = require('jsonwebtoken');

const prisma = new PrismaClient()
import 'dotenv/config'

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   const user = await prisma.user.create({
//          data: {
//                  name: 'Uneeb',
//                  email: 'uneebmir321@yahoo.com',
//                  password: 'bla'
//      },
//    })
//    console.log(user)
res.send("uneeb");
});

app.post('/login', (req: Request, res: Response, next: NextFunction) => {
    const user = {
        name:"uneeb"
    }
    let token = jwt.sign(user, `${process.env.JWT_TOKEN_PRIVATE_KEY}`, {
        expiresIn: process.env.JWT_EXPIRATION,
      });
    res.json(token)  
    });      
    
app.listen(8080,() => {
    console.log("uneeb23");
});

app.get("/test",authenticate,(req:Request, res:Response,next:NextFunction)=>{
    res.send(req.user);
})

function authenticate(req:Request, res:Response,next:NextFunction){
    const authHeader = req.headers['authorization']
    
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token)
    if(!token) { res.sendStatus(401)}

    
    jwt.verify(token, `${process.env.JWT_TOKEN_PRIVATE_KEY}`,(error,user)=>{
        if(error) res.sendStatus(403)
        req.user=user
        next()
    })
}