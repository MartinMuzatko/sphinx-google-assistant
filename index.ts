import { Client } from 'https://deno.land/x/mqtt/deno/mod.ts'

// const client = new Client({ url: 'mqtt://s-s-f.de' })
// await client.connect()
// client.publish('sphinx', JSON.stringify('event'))

addEventListener('fetch', async (event) => {
    const client = new Client({ url: 'mqtt://s-s-f.de' })
    await client.connect()
    client.publish('sphinx', JSON.stringify(event))
    event.respondWith(
        new Response('ok', {
            status: 200,
            headers: { 'content-type': 'application/json' },
        }),
    );
})