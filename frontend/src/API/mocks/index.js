const messageAPI = {
    history: [
        {
            conversationId: '12340',
            conversationName: 'Nguyen Van A',
            pined: true,
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2024-08-20T12:34:56Z',
            },
        },
        {
            conversationId: '12341',
            conversationName: 'Nguyen Van B',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2024-08-20T12:34:56Z',
            },
        },
        {
            conversationId: '12342',
            conversationName: 'Nguyen Van C',
            participants: ['67890', '112233'],
            badge: 5,
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2024-08-28T12:34:56Z',
            },
        },
        {
            conversationId: '12343',
            conversationName: 'Nguyen Van D',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2023-06-13T11:26:48Z',
            },
        },
        {
            conversationId: '12344',
            conversationName: 'Nguyen Van E',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2023-06-13T11:26:48Z',
            },
        },
        {
            conversationId: '12345',
            conversationName: 'Nguyen Van F',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2023-06-13T11:26:48Z',
            },
        },
        {
            conversationId: '12346',
            conversationName: 'Nguyen Van G',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2023-06-13T11:26:48Z',
            },
        },
        {
            conversationId: '12347',
            conversationName: 'Nguyen Van H',
            participants: ['67890', '112233'],
            image: 'https://i.ebayimg.com/images/g/a4UAAOSwV7Vgqb80/s-l1200.jpg',
            lastMessage: {
                content: 'Hello, how are you?',
                timestamp: '2023-06-13T11:26:48Z',
            },
        },
    ],
    conversation: {
        12340: {
            messages: [
                {
                    id: 'msg1',
                    username: 'user123',
                    text: 'Hello, how are you?',
                    timestamp: '2024-08-01T10:00:00Z',
                },
                {
                    id: 'msg2',
                    username: 'user456',
                    text: "I'm good, thanks!",
                    timestamp: '2024-08-01T10:01:00Z',
                },
                {
                    id: 'msg3',
                    username: 'user123',
                    text: "Yah",
                    timestamp: '2024-08-01T10:01:00Z',
                },
                {
                    id: 'msg4',
                    username: 'user123',
                    text: "Yah",
                    timestamp: '2024-08-01T10:01:00Z',
                },
                {
                    id: 'msg5',
                    username: 'user123',
                    text: "Yah",
                    timestamp: '2024-08-01T10:01:00Z',
                },
                {
                    id: 'msg6',
                    username: 'user123',
                    text: "Yah",
                    timestamp: '2024-08-01T10:01:00Z',
                },
            ],
            pagination: {
                page: 1,
                pageSize: 20,
                totalMessages: 200,
            },
        },
    },
    pagination: {
        page: 1,
        pageSize: 20,
        totalMessages: 200,
    },
};

export default messageAPI;
