import {
    faMicrophone,
    faPaperclip,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import messageAPI from '~/API/mocks';
import Button from '~/components/Button';
import Message from '~/components/Message';
import config from '~/config';
import { ChatContext } from '~/layouts/ChatLayout/ChatLayout';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);
const data = messageAPI.conversation[12340].messages;
const username = messageAPI.username;

function Chat() {
    const [messageValue, setMessageValue] = useState('');
    const [setIsSidebarOpen] = useContext(ChatContext);

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
                    {config.chatMenu(setIsSidebarOpen).map((chat, index) => {
                        return (
                            <Button key={index} className={cx('icon')} onClick={chat.onClick} noText>
                                {chat.icon}
                            </Button>
                        );
                    })}
                </div>
            </header>
            <div className={cx('container')}>
                {data.map((item, index) => {
                    return <Message data={item} username={username} key={item.id} />;
                })}
            </div>
            <footer className={cx('footer')}>
                <Button
                    leftIcon={<FontAwesomeIcon icon={faPaperclip} />}
                    className={cx('icon')}
                    noText
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                />
                {messageValue ? (
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                        className={cx('icon')}
                        noText
                    ></Button>
                ) : (
                    <FontAwesomeIcon
                        icon={faMicrophone}
                        className={cx('icon')}
                    />
                )}
            </footer>
        </div>
    );
}

export default Chat;
