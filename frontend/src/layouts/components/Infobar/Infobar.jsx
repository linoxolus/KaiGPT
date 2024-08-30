import classNames from 'classnames/bind';
import InfoBox from '../InfoBox';
import styles from './Infobar.module.scss';

const cx = classNames.bind(styles);

function Infobar() {
    return (
        <div className={cx('wrapper')}>
            <InfoBox />
        </div>
    );
}

export default Infobar;
