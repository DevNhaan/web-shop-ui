import { Container, Bill, Wrapper, Voucher } from './CheckoutDetails.style';
import Breadcrumbs from '../../Layout/Breadcrumbs/Breadcrums';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId, inforUserSelector } from '../../../redux/Selector/AuthSelector';
import {
    getCartItemByUserSelect,
    getNumberOfItem,
    getPriceSaving,
    getTotal,
} from '../../../redux/Selector/CartSelector';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AiOutlineWarning } from 'react-icons/ai';
import httpRequest from '~/Apis/request';
import { createOrderApi } from '~/Apis/OrderApi';
import { useEffect } from 'react';
import Infor from '~/Component/Layout/Infor/Infor';
import { OrderItem } from '~/Component/Layout';

const paymentMethodList = [
    { value: 'PAY_ONLINE', label: 'Thanh toán trực tuyến' },
    { value: 'PAY_ON_DELIVERY', label: 'Thanh toán khi nhận hàng' },
    { value: 'PAY_VIA_PAYPAl', label: 'Thanh toán qua paypal' },
];

const validationSchema = yup.object({
    paymentMethod: yup.string().required('Chọn phương thức thanh toán.'),
});

function CheckoutDetails() {
    const currentUser = useSelector(inforUserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) navigate('/auth/login');
    }, [currentUser, navigate]);

    const items = useSelector(getCartItemByUserSelect);
    const total = useSelector(getTotal);
    const priceSaving = useSelector(getPriceSaving);
    const numOfItem = useSelector(getNumberOfItem);

    const userId = useSelector(getUserId);
    const token = useSelector(getToken);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const axiosToken = httpRequest(token, dispatch);
        if (axiosToken) {
            createOrderApi(values, navigate, dispatch, axiosToken);
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            userId,
            cartItemId: items.map((item) => item.id),
            shippingCost: 0,
            paymentMethod: null,
        },
        validateOnBlur: true,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <div className="container">
            <Breadcrumbs />
            <Container onSubmit={formik.handleSubmit}>
                <Infor />

                <Wrapper>
                    <OrderItem items={items} />

                    <Bill>
                        <Voucher>
                            <label htmlFor="discount">Nhập mã giảm giá</label>
                            <div className="discount">
                                <input id="discount" type="text" placeholder="Nhập mã giảm giá của bạn" />
                                <button type="button" className="btn btn-primary">
                                    Áp dụng
                                </button>
                            </div>
                            <div className="method">
                                <label htmlFor="select">Thanh Toán Khi Nhận Hàng</label>
                                <Select
                                    id="select"
                                    name="paymentMethod"
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 6,
                                        colors: {
                                            ...theme.colors,
                                            primary25: 'var(--primary-color)',
                                            primary: 'var(--primary-color)',
                                        },
                                    })}
                                    placeholder="Chọn phương thức thanh toán"
                                    options={paymentMethodList}
                                    onChange={(selectedOption) =>
                                        formik.setFieldValue('paymentMethod', selectedOption.value)
                                    }
                                    onBlur={(e) => formik.setFieldTouched('paymentMethod', true)}
                                />
                                {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                                    <p className="error-message">
                                        <AiOutlineWarning /> {formik.errors.paymentMethod}
                                    </p>
                                ) : (
                                    ''
                                )}
                            </div>
                        </Voucher>
                        <p className="heading-s">Hóa đơn của bạn</p>
                        <div className="row">
                            <div className="heading">Sản phẩm </div>
                            <div className="heading"> Giá</div>
                        </div>

                        <span className="line"></span>
                        {items.map((item) => (
                            <div className="row" key={item.id}>
                                <p className="name">
                                    {item.product.name} &#215; {item.quantity}
                                </p>
                                <p className="price">{Number(item.finalPrice).toLocaleString('en-US')} &#8363;</p>
                            </div>
                        ))}
                        <div className="row">
                            <span>Tiết kiệm</span>
                            <span>- {priceSaving && Number(priceSaving).toLocaleString('en-US')} &#8363;</span>
                        </div>
                        <div className="row">
                            <span>Phí ship</span>
                            <span>0 &#8363;</span>
                        </div>
                        <span className="line"></span>
                        <div className="row">
                            <strong>Tổng ({numOfItem} Sản phẩm)</strong>
                            <div className="price">{total && Number(total).toLocaleString('en-US')} &#8363;</div>
                        </div>
                        <span className="text">Đồng ý với với các điều khoản và điều kiện của website</span>
                        <button type="submit" className="btn btn-primary btn-full" disabled={!formik.isValid}>
                            Đặt hàng ngay
                        </button>
                        <span className="text">
                            Thông tin của bạn sẽ được sử dụng để xử lý đơn hàng không lưu trữ với mục đích khác.Tìm hiểu
                            thêm ở <a href="#!"> Chính sách riêng tư</a>
                        </span>
                    </Bill>
                </Wrapper>
            </Container>
        </div>
    );
}

export default CheckoutDetails;
