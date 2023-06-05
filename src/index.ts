import express, { Application } from 'express';
import 'dotenv/config'

const app: Application = express();
app.use(express.json());
//importing routes
app.use(require('./routes/web'));

// app.post('/login', (req: Request, res: Response, next: NextFunction) => {
//     const user = {
//         name:"uneeb"
//     }

//     });      
    
app.listen(process.env.SERVER_PORT,() => {
    console.log(`Server Started at localhost:${process.env.SERVER_PORT}`);
});

// app.get("/test",authenticate,(req:Request, res:Response,next:NextFunction)=>{
//     res.send(req.user);
// })

// app.get("/test2",userController.loginOne)


   

// 

// function authenticate(req:Request, res:Response,next:NextFunction){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(" ")[1]
//     if(!token) res.sendStatus(401)
    
//     jwt.verify(token, `${process.env.JWT_TOKEN_PRIVATE_KEY}`,(error,user)=>{
//         if(error) res.sendStatus(403)
//         req.user=user
//         next()
//     })
// }