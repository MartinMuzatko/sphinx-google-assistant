// 0import { Client } from 'https://deno.land/x/mqtt@0.1.2/deno/mod.ts'

// const client = new Client({ url: 'mqtt://s-s-f.de' })

const x = {
    session: {
        id: 'example_session_id',
        params: {}
    },
    prompt: {
        override: false,
        content: {
            card: {
                title: 'Bam Oida',
                subtitle: 'Moch i jo glott!',
                text: 'Miau',
                image: {
                    alt: 'Google Assistant logo',
                    height: 0,
                    url: 'https://developers.google.com/assistant/assistant_96.png',
                    width: 0
                }
            }
        },
        firstSimple: {
            speech: 'Na von mir aus, aber ich weiß nicht wieso ich mich so gelangweilt anhöre',
            text: ''
        }
    }
}

addEventListener('fetch', async (event) => {
    // client.publish('sphinx', JSON.stringify(event))
    const json = await event.request.json()
    console.log(json)
    event.respondWith(
        new Response('ok', {
            status: 200,
            headers: { 'content-type': 'application/json' },
        }),
    );
});