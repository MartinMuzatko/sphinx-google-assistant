
const x = {
    session: {
        id: 'example_session_id',
        params: {}
    },
    prompt: {
        override: false,
        content: {
            card: {
                title: 'Card Title',
                subtitle: 'Card Subtitle',
                text: 'Card Content',
                image: {
                    alt: 'Google Assistant logo',
                    height: 0,
                    url: 'https://developers.google.com/assistant/assistant_96.png',
                    width: 0
                }
            }
        },
        firstSimple: {
            speech: 'This is a card rich response.',
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