import { BiLocationPlus } from 'react-icons/bi';
import { Address, InforMain } from './Infor.style';
import { useSelector } from 'react-redux';
import { defaultAddressSelector, inforUserSelector } from '~/redux/Selector/AuthSelector';
import ChangeAddress from './ChangeAddress';

function Infor() {
    const currentUser = useSelector(inforUserSelector);

    const defaultAddress = useSelector(defaultAddressSelector);

    return (
        <InforMain>
            <strong>
                <BiLocationPlus /> Địa chỉ nhận hàng
            </strong>
            <Address>
                <div>
                    <div>
                        <strong>Tên:</strong> {currentUser?.displayName}
                    </div>
                    <div>
                        <strong>Số điện hoại:</strong> {currentUser?.phone}
                    </div>
                    {defaultAddress ? (
                        <>
                            <div>
                                <strong>Địa chỉ:</strong> {defaultAddress.address} , {defaultAddress.ward},
                                {defaultAddress.district}, {defaultAddress.city}
                                <span className="tag primary">Mặt định</span>
                            </div>
                        </>
                    ) : (
                        <p>Bạn chưa có địa chỉ</p>
                    )}
                </div>
                <ChangeAddress />
            </Address>
        </InforMain>
    );
}

export default Infor;
