const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // Create register
    // const post = await prisma.post.createMany({
    //     data: [
    //         { title: 'Título 2', content: 'Este es mi segundo post' },
    //         { title: 'Título 3', content: 'Este es mi tercer post' },
    //         { title: 'Título 4', content: 'Este es mi cuarto post' },
    //     ]
    // })
    // console.log(post);

    // Show registers
    // const allPosts = await prisma.post.findMany()
    // console.log(allPosts);

    // Show single register
    // const post = await prisma.post.findUnique({
    //     where: {
    //         id: 3
    //     }
    // })
    // console.log(post);

    // Register update
    // const updatePost = await prisma.post.update({
    //     where: {
    //         id: 4
    //     },
    //     data: {
    //         title: 'Título 4 - editado',
    //         content: 'Contenido editado'
    //     }
    // })
    // console.log(updatePost);

    // Delete register
    const deletePost = await prisma.post.delete({
        where: {
            id: 2
        }
    })
    console.log(deletePost);
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })