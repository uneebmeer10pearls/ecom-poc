import { PrismaClient } from '@prisma/client'
import * as helper from '../utils/helper.js'

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
export async function addProduct(params) {
    try {
        let { name,description,category_id,sku } = params
        const user = await prisma.products.create({
            data: {
              name:  name,
              description:description,
              category_id:category_id,
              sku:sku
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
export async function deleteProduct(params) {
    try {
        let { id } = params
        const user = await prisma.products.delete({
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
export async function updateProduct(params) {
    try {
        let { id,name,description } = params
        const user = await prisma.products.update({
            where: {
              id: id,
            },
            data: {
              name:name,
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
