import classNames from 'classnames/bind';
import styles from './InfoBox.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function InfoItem({ data }) {
    return (
        <div className={cx('info-item')}>
            <div className={cx('header')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('action')}>See all</span>
            </div>
            <div className={cx('content')}>
                <Button noCss>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>{data.icon}</div>
                        <div className={cx('text')}>{data.defaultText}</div>
                    </div>
                </Button>
                <Button noCss>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>{data.icon}</div>
                        <div className={cx('text')}>{data.defaultText}</div>
                    </div>
                </Button>
                <Button noCss>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>{data.icon}</div>
                        <div className={cx('text')}>{data.defaultText}</div>
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default InfoItem;
