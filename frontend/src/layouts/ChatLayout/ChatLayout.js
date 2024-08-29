import classNames from 'classnames/bind';
import styles from './ChatLayout.module.scss';
import Dockbar from '~/layouts/components/Dockbar';
import Infobar from '~/layouts/components/Infobar';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Dockbar />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Infobar />
        </div>
    );
}

export default DefaultLayout;
