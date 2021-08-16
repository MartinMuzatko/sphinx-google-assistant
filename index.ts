
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

addEventListener('fetch', (event) => {
    event.respondWith(
        new Response(JSON.stringify(x), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        }),
    );
});