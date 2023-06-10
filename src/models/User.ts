import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper.js'

const prisma = new PrismaClient({
    errorFormat: 'minimal',
})

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
        return helper.formatError(error)
    }
}
export async function getUser(params:Object) {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: params['email'],
            }
          })
        return {
            status:200,
            data:user
        }
    }
    catch (error) {
        return helper.formatError(error)
    }
}
export async function getUsers() {
    try {
        const user = await prisma.user.findMany({
            select: {
                email: true,
                name: true,
            },
        })
        return {
            status:200,
            data:user
        }
    }
    catch (error) {
        return helper.formatError(error)
    }
}