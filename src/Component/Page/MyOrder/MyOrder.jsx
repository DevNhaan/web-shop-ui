import { useSelector } from 'react-redux';
import { OrderItem, ProgressBar } from '~/Component/Layout';
import { getOrder } from '~/redux/Selector/OrderSelector';
import { Wrap, WrapItem, Actions } from './MyOrder.style';
import Button from '~/Component/Button';
import { Link } from 'react-router-dom';

function MyOrder() {
    const orders = useSelector(getOrder);
    console.log(orders);
    return (
        <Wrap className="container">
            {orders.length < 0 ? (
                <div className="full-vh">
                    Bạn chưa có đơn hàng nào. <Link to="/"> Mua sắm ngay</Link>
                </div>
            ) : (
                orders?.map((order) => (
                    <WrapItem>
                        <Actions>
                            <Button className="btn btn-outline">Thay đổi thông tin</Button>
                        </Actions>
                        <OrderItem items={order?.orderItems} />
                        <ProgressBar orderDetails={order} />
                        <Actions>
                            <Button className="btn btn-primary">Xác nhận đã nhận hàng</Button>
                            <Button className="btn btn-outline">Thông tin chi tiết</Button>
                        </Actions>
                    </WrapItem>
                ))
            )}
        </Wrap>
    );
}

export default MyOrder;
