import classNames from 'classnames/bind';
import styles from './Infobar.module.scss';

const cx = classNames.bind(styles);

function Infobar() {
    return <div className={cx('wrapper')}></div>;
}

export default Infobar;
