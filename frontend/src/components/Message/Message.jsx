import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Message.module.scss';
import MessageItem from './MessageItem';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Message({ data, username }) {
    if (!data.avatar) {
        data.avatar = images.defaultAvatar;
    }
    return (
        <div className={cx('wrapper', { right: data.username === username })}>
            <div className={cx('user')}>
                <Image src={data.avatar} />
            </div>
            <div className={cx('container')}>
                <MessageItem data={data} username={username} />
            </div>
        </div>
    );
}

export default Message;
