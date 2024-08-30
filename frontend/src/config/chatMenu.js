import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faPhone,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const chatMenu = (setIsSidebarOpen) => [
    {
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        onClick: () => {},
    },
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        onClick: () => {},
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        onClick: () => {},
    },
    {
        icon: <FontAwesomeIcon icon={faEllipsisVertical} />,
        onClick: () => {
            setIsSidebarOpen(true);
        },
    },
];

export default chatMenu;
