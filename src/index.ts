import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
import 'dotenv/config'

const app: Application = express();
app.get('/',async (req: Request, res: Response, next: NextFunction) => {
  const user = await prisma.user.create({
         data: {
                 name: 'Uneeb',
                 email: 'uneebmir321@yahoo.com',
                 password: 'bla'
     },
   })
   console.log(user)
});
app.listen(8080,() => {
    console.log("uneeb23");
});