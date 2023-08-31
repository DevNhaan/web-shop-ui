import { AiOutlineCheck } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { ProgressBar } from '~/Component/Layout';
import { getOrder } from '~/redux/Selector/OrderSelector';
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2ecc71;
    width: 100%;
    justify-content: center;
    gap: 30px 0;
    padding: 20px 0;
    & .thanks {
        color: #fff;
        text-transform: uppercase;
        font-size: 3rem;
    }
`;
const CheckIcon = styled.div`
    width: 140px;
    aspect-ratio: 1 /1;
    background-color: #fff;
    color: #2ecc71;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
`;
const ThanksWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px 0;
    color: #fff;
`;

function OrderComfirm() {
    const order = useSelector(getOrder);
    return (
        <div>
            <Wrap>
                <ThanksWrap>
                    <CheckIcon>
                        <AiOutlineCheck />
                    </CheckIcon>
                    <p className="thanks">Thank you</p>
                    <p>Đặt hàng thành công</p>
                    <span className="text">
                        Chúng tôi sẽ gửi thông tin qua email của bạn. Đơn hàng có thể tìm thấy trong phần đơn hàng của
                        bạn.
                    </span>
                </ThanksWrap>

                <ProgressBar orderDetails={order[order.length - 1]} />
            </Wrap>
        </div>
    );
}

export default OrderComfirm;
