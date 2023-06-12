import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper.js'

const prisma = new PrismaClient({
    errorFormat: 'minimal',
})

export async function getCategories() {
    try {
        const user = await prisma.categories.findMany({
            include: {
                products: true, // All posts where authorId == 20
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
export async function createCategory(params) {
    try {
        let { name,description } = params
        const user = await prisma.categories.create({
            data: {
              name:  name,
              description:description
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
export async function deleteCategory(params) {
    try {
        let { id } = params
        const user = await prisma.categories.delete({
            where: {
              id: id,
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
export async function updateCategory(params) {
    try {
        let { id,name,description } = params
        const user = await prisma.categories.update({
            where: {
              id: id,
            },
            data: {
              name: name,
              description:description
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
