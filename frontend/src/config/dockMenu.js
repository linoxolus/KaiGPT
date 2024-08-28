import {
    faClock,
    faFileAudio,
    faGear,
    faMessage,
    faMicrophone,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from './routes';

const dockMenu = [
    {
        title: 'Chat',
        icon: <FontAwesomeIcon icon={faMessage} />,
        to: routes.chat,
    },
    {
        title: 'TTS',
        icon: <FontAwesomeIcon icon={faFileAudio} />,
        to: routes.tts,
    },
    {
        title: 'Whisper',
        icon: <FontAwesomeIcon icon={faMicrophone} />,
        to: routes.whisper,
    },
    {
        title: 'Clock',
        icon: <FontAwesomeIcon icon={faClock} />,
        to: routes.clock,
    },
    {
        title: 'Account',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: routes.account,
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: routes.settings,
    },
];

export default dockMenu;
