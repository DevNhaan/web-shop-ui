import { BsBox, BsClipboardCheck } from 'react-icons/bs';
import { TbPackages, TbTruckDelivery } from 'react-icons/tb';
import { Progress, Details } from './ProgressBar.style';
import moment from 'moment/moment';

function ProgressBar({ orderDetails }) {
    return (
        <Progress>
            <Details>
                <p>Mã đơn hàng: {orderDetails?.id}</p>
                <p>Thời gian đặt hàng: {moment(orderDetails?.orderDate).format('HH:mm [ngày] DD/MM/YYYY')}</p>
                <p>
                    Tổng đơn hàng:
                    <span className="primary-color">{Number(orderDetails?.total).toLocaleString('en-US')} &#8363;</span>
                </p>
            </Details>
            <ul className="step-list">
                <li className="step-item current-item">
                    <span className="progress-count">1</span>
                    <span className="progress-label">
                        <span className="icon">
                            <BsClipboardCheck />
                        </span>
                        Chờ xác nhận
                    </span>
                </li>
                <li className="step-item ">
                    <span className="progress-count">2</span>
                    <span className="progress-label">
                        <span className="icon">
                            <TbPackages />
                        </span>
                        Đơn hàng đang chuẩn bị
                    </span>
                </li>
                <li className="step-item">
                    <span className="progress-count">3</span>
                    <span className="progress-label">
                        <span className="icon">
                            <TbTruckDelivery />
                        </span>
                        Đang giao
                    </span>
                </li>
                <li className="step-item">
                    <span className="progress-count">4</span>
                    <span className="progress-label">
                        <span className="icon">
                            <BsBox />
                        </span>
                        Nhận hàng thành công
                    </span>
                </li>
            </ul>
        </Progress>
    );
}

export default ProgressBar;
