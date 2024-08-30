import {
    faArchive,
    faBell,
    faTimes,
    faTrashCan,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/components/Button';
import config from '~/config';
import { ChatContext } from '~/layouts/ChatLayout/ChatLayout';
import styles from './InfoBox.module.scss';
import InfoItem from './InfoItem';

const cx = classNames.bind(styles);

function InfoBox() {
    const [setIsSidebarOpen] = useContext(ChatContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-item', 'control')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>Chat Details</span>
                    <span className={cx('action')}>
                        <Button
                            noText
                            leftIcon={<FontAwesomeIcon icon={faTimes} />}
                            onClick={() => setIsSidebarOpen(false)}
                        ></Button>
                    </span>
                </div>
                <div className={cx('content')}>
                    <Button noCss>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                        </div>
                    </Button>
                    <Button noCss>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faArchive} />
                            </div>
                        </div>
                    </Button>
                    <Button noCss>
                        <div className={cx('item')}>
                            <div className={cx('icon', 'red')}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        </div>
                    </Button>
                    <Button noCss>
                        <div className={cx('item')}>
                            <div className={cx('icon', 'red')}>
                                <FontAwesomeIcon icon={faVolumeXmark} />
                            </div>
                        </div>
                    </Button>
                </div>
            </div>

            {config.infoBar.map((item, index) => {
                return <InfoItem data={item} key={index} />;
            })}
        </div>
    );
}

export default InfoBox;
