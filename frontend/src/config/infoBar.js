import { faFile, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const infoBar = [
    {
        title: 'Shared Files',
        icon: <FontAwesomeIcon icon={faFile} />,
        defaultText: 'Files',
    },
    {
        title: 'Shared Links',
        icon: <FontAwesomeIcon icon={faLink} />,
        defaultText: 'Links',
    },
];

export default infoBar;
