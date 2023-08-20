import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import Button from '~/Component/Button';
import { inforUserSelector } from '~/redux/Selector/AuthSelector';
import { FaLocationDot } from 'react-icons/fa6';
import { AddressList } from './CheckoutDetails.style';
import { BsSendPlusFill } from 'react-icons/bs';
import { useState } from 'react';
import Address from '../Address/Address';
import { setDefaultAddress } from '~/redux/Slide/AuthSlide';
function ChangeAddress({ closeModal }) {
    const currentUser = useSelector(inforUserSelector);
    const [openCreateAddress, setOpenCreateAddress] = useState(false);
    const dispatch = useDispatch();
    const handleChangeAddress = (id, close) => {
        dispatch(setDefaultAddress(id));
        close();
    };
    return (
        <>
            <Popup
                trigger={
                    <div className="delte-btn btn btn-s">
                        <Button type="button" className="btn btn-outline">
                            Thay đổi
                        </Button>
                    </div>
                }
                modal
            >
                {(close) => (
                    <div className="modal">
                        <button className="modal_close" onClick={close}>
                            <FaTimes />
                        </button>
                        {openCreateAddress || <div className="modal_header"> Chọn địa chỉ </div>}
                        <div className="modal_content">
                            {!openCreateAddress ? (
                                <AddressList>
                                    {currentUser.userAddress.map((address) => (
                                        <div
                                            onClick={() => handleChangeAddress(address.id, close)}
                                            className="item"
                                            key={address.id}
                                        >
                                            <span className="icon">
                                                <FaLocationDot />
                                            </span>
                                            <p>
                                                {address.address}, {address.ward}, {address.district}, {address.city}
                                            </p>
                                        </div>
                                    ))}
                                    <div className="item">
                                        <span className="icon">
                                            <BsSendPlusFill />
                                        </span>
                                        <p className="primary-color" onClick={() => setOpenCreateAddress(true)}>
                                            Thêm địa chỉ mới
                                        </p>
                                    </div>
                                </AddressList>
                            ) : (
                                <Address closeModal={close} />
                            )}
                        </div>
                        <div className="modal_actions">
                            {!openCreateAddress ? (
                                <Button
                                    onClick={() => {
                                        close();
                                    }}
                                    className="btn btn-warning"
                                >
                                    Lưu
                                </Button>
                            ) : (
                                <Button onClick={() => setOpenCreateAddress(false)}>Quay lại</Button>
                            )}
                        </div>
                    </div>
                )}
            </Popup>
        </>
    );
}

export default ChangeAddress;
