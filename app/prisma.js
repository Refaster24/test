const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function clink(){
    const user = await prisma.user.findMany()

    console.log(user)
}

clink()
    .catch(e=>{
        console.log(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })
