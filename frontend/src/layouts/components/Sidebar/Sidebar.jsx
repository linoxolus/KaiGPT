import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Search from '~/layouts/components/Search';
import messageAPI from '~/API/mocks';
import Conversation from '~/layouts/components/Conversation';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Search />
            <div className={cx('conversations')}>
                {messageAPI.history.map((message, index) => {
                    return (
                        <Conversation
                            data={message}
                            key={message.conversationId}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
