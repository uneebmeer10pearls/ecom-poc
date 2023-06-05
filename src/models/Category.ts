import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper'

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