import classNames from 'classnames/bind';
import styles from './Dockbar.module.scss';
import Image from '~/components/Image/Image';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function DockItem({
    icon,
    image,
    title,
    separate,
    className,
    to,
    disabled,
    ...passProps
}) {
    const getActiveClass = ({ isActive }) =>
        cx('dock-item', { separate, [className]: className, active: isActive });

    if (disabled) {
        Object.keys(passProps).forEach((key) => {
            if (key.startsWith('on') && typeof passProps[key] === 'function') {
                delete passProps[key];
            }
        });
    }

    return (
        <NavLink to={to} className={getActiveClass} {...passProps}>
            {icon ? icon : <Image src={image} alt="Icon" />}
            <span>{title}</span>
        </NavLink>
    );
}

export default DockItem;
