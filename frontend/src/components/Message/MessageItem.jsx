import classNames from 'classnames/bind';
import { getMessageTime } from '~/Utils/timestamp';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);

function MessageItem({ data, username }) {
    const timestamp = Date.parse(data.timestamp);
    return (
        <div
            className={cx('message-item', 'bubble', {
                left: !(data.username === username),
                right: data.username === username,
            })}
        >
            <div className={cx('header')}>
                <div className={cx('username')}>{data.username}</div>
            </div>
            <div className={cx('content')}>{data.text}</div>
            <div className={cx('footer')}>
                <div className="seen"></div>
                <div className={cx('time')}>{getMessageTime(timestamp)}</div>
            </div>
        </div>
    );
}

export default MessageItem;
