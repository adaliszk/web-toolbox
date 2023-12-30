import { createMicroservice, Transport } from '@adaliszk/nestjs'
async function main()
{
    await createMicroservice({
        name: 'nestjs-microservice-example',
        service: {
            transport: Transport.TCP
        },
        threads: 6,
    })
}

main().catch(err => console.error)
