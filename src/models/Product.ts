import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper'

const prisma = new PrismaClient({
    errorFormat: 'minimal',
})

export async function getProducts() {
    try {
        const user = await prisma.products.findMany()
        return {
            status:200,
            data:user
        }
    }
    catch (error) {
        return helper.formatError(error)
    }
}