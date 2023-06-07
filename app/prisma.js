const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function clink(){
    const user = await prisma.user

    console.log(user)
}
// npx prisma migrate dev --name init
clink()
    .catch(e=>{
        console.log(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })
