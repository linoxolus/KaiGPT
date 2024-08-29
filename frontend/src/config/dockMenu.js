import {
    faFileAudio,
    faGear,
    faHome,
    faMessage,
    faMicrophone,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from './routes';

const dockMenu = [
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />,
        to: routes.home,
    },
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
