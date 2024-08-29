import config from '~/config';
import Chat from '~/layouts/components/Chat';
import ChatLayout from '~/layouts/ChatLayout';

const publicRoutes = [
    {
        path: config.routes.home,
        component: '',
    },
    {
        path: config.routes.home,
        component: '',
    },
    {
        path: config.routes.chat,
        component: <Chat />,
        layout: ChatLayout,
    },
    {
        path: config.routes.tts,
        component: '',
    },
    {
        path: config.routes.whisper,
        component: '',
    },
    {
        path: config.routes.account,
        component: '',
    },
    {
        path: config.routes.settings,
        component: '',
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
