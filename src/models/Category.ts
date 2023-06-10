import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper.js'

const prisma = new PrismaClient({
    errorFormat: 'minimal',
})

export async function getCategories() {
    try {
        const user = await prisma.categories.findMany()
        return {
            status:200,
            data:user
        }
    }
    catch (error) {
        return helper.formatError(error)
    }
}
export async function createCategory(params) {
    try {
        let { name,description } = params
        // const user = await prisma.categories.create({
        //     name:params['name'],
        //     description:description
        // })
        // return {
        //     status:200,
        //     data:user
        // }
    }
    catch (error) {
        return helper.formatError(error)
    }
}
