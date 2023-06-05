import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    errorFormat: 'minimal',
  })
// export const createAccount = async (req: Request, res: Response) => {
//     // try {
//         return "hello from model"
//         // res.status(200).send(req.body);
//         // const user = await prisma.user.create({
//             //          data: {
//             //                  name: 'Uneeb',
//             //                  email: 'uneebmir321@yahoo.com',
//             //                  password: 'bla'
//             //      },
//             //    })
//     //   res.status(200).send(foundUser);
//     // } catch (error) {
//     //   return res.status(500).send("test2");
//     // }
//    };

export async function createAccount(params:Object) {
    try {
        const data = await prisma.user.create({
            data: {
                name: params['name'],
                email: params['email'],
                password: params['password']
            }
        })
        return {
            status:200,
            data:data
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                status:400,
                error:error.toString()
            }
        }
    }
}