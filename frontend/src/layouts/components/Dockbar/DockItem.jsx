import classNames from 'classnames/bind';
import styles from './Dockbar.module.scss';
import Image from '~/components/Images/Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DockItem({
    icon,
    image,
    title,
    separate,
    className,
    to,
    href,
    disabled,
    active,
    ...passProps
}) {
    let Comp = 'button';
    const classes = ['dock-item', { separate, active, [className]: className }];
    const props = {
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    }

    if (href) {
        Comp = 'a';
        props.href = href;
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={cx(classes)} {...props}>
            {icon ? icon : <Image src={image} alt="Icon" />}
            <span>{title}</span>
        </Comp>
    );
}

export default DockItem;
