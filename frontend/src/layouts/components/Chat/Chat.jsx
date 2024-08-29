import { faMicrophone, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Chat.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Chat() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('info')}>
                    <div className={cx('head')}>Office chat</div>
                    <div className={cx('member', 'data')}>
                        45 members, 24 online
                    </div>
                </div>
                <div className={cx('control')}>
                    {config.chatMenu.map((chat, index) => {
                        return (
                            <Button key={index} className={cx('icon')} noText>
                                {chat.icon}
                            </Button>
                        );
                    })}
                </div>
            </header>
            <div className={cx('container')}></div>
            <footer className={cx('footer')}>
                <FontAwesomeIcon icon={faPaperclip} className={cx('icon')} />
                <input type="text" name="message" placeholder="Your message" />
                <FontAwesomeIcon icon={faMicrophone} className={cx('icon')} />
            </footer>
        </div>
    );
}

export default Chat;
