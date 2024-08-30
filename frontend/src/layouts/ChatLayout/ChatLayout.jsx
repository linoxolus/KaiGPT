import classNames from 'classnames/bind';
import { createContext, useState } from 'react';
import Dockbar from '~/layouts/components/Dockbar';
import Infobar from '~/layouts/components/Infobar';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './ChatLayout.module.scss';

const cx = classNames.bind(styles);
export const ChatContext = createContext();

function DefaultLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <ChatContext.Provider value={[setIsSidebarOpen, isSidebarOpen]}>
            <div className={cx('wrapper')}>
                <Dockbar />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
                {isSidebarOpen && <Infobar />}
            </div>
        </ChatContext.Provider>
    );
}

export default DefaultLayout;
