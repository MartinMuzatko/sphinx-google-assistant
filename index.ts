import { Client } from 'https://deno.land/x/mqtt@0.1.2/deno/mod.ts'

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