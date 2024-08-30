import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Dockbar.module.scss';
import DockItem from './DockItem';
import config from '~/config';

const cx = classNames.bind(styles);

function Dockbar() {
    const [activeTab, setActiveTab] = useState(1);

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
                        onClick={() => {
                            setActiveTab(index);
                        }}
                        active={index === activeTab}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dockbar;
