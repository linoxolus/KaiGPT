import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Images/Images';
import getFomatLastTime from '~/Utils/timestamp';
import styles from './Conversation.module.scss';

const cx = classNames.bind(styles);

function Conversation({ data, active, pined }) {
    const time = Date.parse(data.lastMessage.timestamp);
    const classes = ['wrapper', { active }];

    return (
        <div className={cx(classes)}>
            <div className={cx('image')}>
                <Image src={data.image} alt="image" />
            </div>
            <div className={cx('info')}>
                <div className={cx('header')}>
                    <div className={cx('text')}>{data.conversationName}</div>
                    <div className={cx('data')}>{getFomatLastTime(time)}</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('text')}>{data.lastMessage.content}</div>
                    <div className={cx('data')}>
                        {data.badge && (
                            <span className={cx('badge')}>{data.badge}</span>
                        )}
                        {pined && <FontAwesomeIcon icon={faThumbTack} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conversation;
