import {
    faMicrophone,
    faPaperclip,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import messageAPI from '~/API/mocks';
import images from '~/assets/images';
import Button from '~/components/Button';
import Message from '~/components/Message';
import config from '~/config';
import { ChatContext } from '~/layouts/ChatLayout/ChatLayout';
import styles from './Chat.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);
const username = messageAPI.username;

function Chat() {
    const [messageValue, setMessageValue] = useState('');
    const messageInput = useRef();
    const chatContainer = useRef();
    const [setIsSidebarOpen] = useContext(ChatContext);
    const [data, setData] = useState([
        ...messageAPI.conversation[12340].messages,
    ]);

    useEffect(() => {
        chatContainer.current.scrollTo(0, chatContainer.current.scrollHeight);
    }, [data]);

    // shit code
    let newData = [...data];

    function addMessage(text, username = 'user456') {
        newData = [
            ...newData,
            {
                id: `msg${newData.length + 1}`,
                username,
                avatar: images.defaultAvatar,
                text,
                timestamp: new Date().toISOString(),
            },
        ];

        setData(newData);
    }

    function sendMessage(e) {
        const userMessage = messageValue;
        addMessage(userMessage);
        setMessageValue('');
        messageInput.current.focus();
        axios
            .get('http://localhost:8080/API/chat/ask', {
                params: {
                    prompt: userMessage,
                },
            })
            .then((res) => {
                let messages = res.data.response.candidates[0].content.parts;
                addMessage(messages[0].text, 'user123');
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                            <Button
                                key={index}
                                className={cx('icon')}
                                onClick={chat.onClick}
                                noText
                            >
                                {chat.icon}
                            </Button>
                        );
                    })}
                </div>
            </header>
            <div className={cx('container')} ref={chatContainer}>
                {data.map((item, index) => {
                    return (
                        <Message
                            data={item}
                            username={username}
                            key={item.id}
                        />
                    );
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
                    ref={messageInput}
                    onChange={(e) => {
                        setMessageValue(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.nativeEvent.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />
                {messageValue ? (
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                        className={cx('icon')}
                        onClick={sendMessage}
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
