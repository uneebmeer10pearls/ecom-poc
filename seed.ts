import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
        email: 'testemail@gmail.com',
        name: 'asd',
        password:'bla'
    },
  })

  const category = await prisma.categories.create({
    data: {
        name: 'test cat',
        description: 'test cat description'
    },
  })

  const product = await prisma.products.create({
    data: {
        name: 'test product',
        description: 'test product description',
        category_id:category.id,
        sku:"test product sku"
    },
  })
  console.log({ user,category,product })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })