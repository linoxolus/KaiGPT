import classNames from 'classnames/bind';
import { memo } from 'react';

import config from '~/config';
import styles from './Dockbar.module.scss';
import DockItem from './DockItem';

const cx = classNames.bind(styles);

function Dockbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('dock-menu')}>
                {config.dockMenu.map((dock, index) => (
                    <DockItem
                        title={dock.title}
                        icon={dock.icon}
                        key={index}
                        to={dock.to}
                        href={dock.href}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(Dockbar);
