import {
    Container,
    Bill,
    Infor,
    Address,
    Header,
    Name,
    Wrapper,
    Price,
    Quantity,
    ItemWrap,
    Item,
    Voucher,
} from './CheckoutDetails.style';
import { BiLocationPlus } from 'react-icons/bi';
import Breadcrumbs from '../../Breadcrumbs';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { defaultAddressSelector, inforUserSelector } from '../../../redux/Selector/AuthSelector';
import {
    getCartItemByUserSelect,
    getNumberOfItem,
    getPriceSaving,
    getTotal,
} from '../../../redux/Selector/CartSelector';
import ChangeAddress from './ChangeAddress';

function CheckoutDetails() {
    const currentUser = useSelector(inforUserSelector);
    const defaultAddress = useSelector(defaultAddressSelector);
    console.log(defaultAddress);
    const items = useSelector(getCartItemByUserSelect);
    const total = useSelector(getTotal);
    const priceSaving = useSelector(getPriceSaving);
    const numOfItem = useSelector(getNumberOfItem);
    const { address, district, city, ward } = defaultAddress;

    console.log(currentUser);
    return (
        <div className="container">
            <Breadcrumbs />
            <Container>
                <Infor>
                    <strong>
                        <BiLocationPlus /> Địa chỉ nhận hàng
                    </strong>
                    <Address>
                        <div>
                            <p>
                                <strong>Tên:</strong> {currentUser.displayName}
                            </p>
                            <p>
                                <strong>Số điện hoại:</strong> {currentUser.phone}
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong> {address} , {ward}, {district}, {city}
                            </p>
                        </div>
                        <ChangeAddress />
                    </Address>
                </Infor>

                <Wrapper>
                    <ItemWrap>
                        <Header className="item">
                            <Name>Sản phẩm</Name>
                            <Quantity>Số Lượng </Quantity>
                            <Price>Giá</Price>
                        </Header>

                        {items.map((item) => (
                            <Item key={item.id}>
                                <Link to={`/details/${item.id}`} className="image">
                                    <img src={item.product.images[0].url} alt="sanpham" />
                                </Link>

                                <Name>{item.product.name}</Name>
                                <Quantity>{item.quantity}</Quantity>

                                <Price>{Number(item.finalPrice).toLocaleString('en-US')} &#8363;</Price>
                            </Item>
                        ))}
                    </ItemWrap>

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
                                    name="ward"
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
                                    options={[
                                        { value: 'PAY_ONLINE', label: 'Thanh toán trực tuyến' },
                                        { value: 'PAY_ON_DELIVERY', label: 'Thanh toán khi nhận hàng' },
                                        { value: 'PAY_VIA_PAYPAl', label: 'Thanh toán qua paypal' },
                                    ]}
                                />
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
                        <span className="line"></span>
                        <div className="row">
                            <strong>Tổng ({numOfItem} Sản phẩm)</strong>
                            <div className="price">{total && Number(total).toLocaleString('en-US')} &#8363;</div>
                        </div>
                        <span>Đồng ý với với các điều khoản và điều kiện của website</span>
                        <button type="submit" className="btn btn-primary btn-full">
                            Đặt hàng ngay
                        </button>
                        <span>
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
