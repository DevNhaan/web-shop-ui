import { useState } from 'react';
import {
    Order,
    Details,
    ImageContainer,
    Container,
    MainImg,
    ListImg,
    Name,
    Prize,
    Price,
    Size,
    Description,
    Quantity,
    BuyBtn,
} from './ProductDetails.style';
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsBagCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getToken, getUserId } from '~/redux/Selector/AuthSelector';
import { addProductToCart } from '~/Apis/CartApi';
import httpRequest from '~/Apis/request';
const btns = ['s', 'm', 'l', 'xl'];

function ProductDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const token = useSelector(getToken);

    const userId = useSelector(getUserId);

    const product = useSelector((state) => {
        return state.allProducts?.products.find((product) => product.id === id);
    });

    const [size, setSize] = useState('s');
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setImage] = useState(product.avatar);

    const increaseQuantity = () => {
        if (quantity >= parseInt(product.quantity)) return;
        setQuantity((prev) => prev + 1);
    };
    const decreaseQuantity = () => {
        if (quantity === 0) return;
        setQuantity((prev) => prev - 1);
    };
    const addProductToCartHandle = (e, productId) => {
        e.preventDefault();
        if (!userId) return navigate('/auth/login');

        const data = {
            userId: userId,
            productId: productId,
            quantity: 1,
        };
        addProductToCart(data, dispatch, httpRequest(token));
    };
    return (
        <>
            {product && (
                <Container>
                    <ImageContainer>
                        <ListImg className="align-center-flex" id="scrollbar">
                            {product.images.map((image, i) => (
                                <div
                                    key={i}
                                    onClick={() => setImage(image.url)}
                                    className={`item ${image.url === currentImage ? 'active' : ''}`}
                                >
                                    <img src={image.url} alt="san pham" />
                                </div>
                            ))}
                            <div className="force-overflow"></div>
                        </ListImg>
                        <MainImg>
                            <img src={currentImage} alt="san pham" />
                        </MainImg>
                    </ImageContainer>
                    <Details>
                        <p className="heading-s">Danh mục: Thời trang</p>
                        <Name>{product.name}</Name>
                        <Prize className="align-center-flex">
                            <span className="rating">
                                <i>
                                    <AiFillStar />
                                </i>
                                <span>{product.likes}</span>
                            </span>
                            <span className="view">
                                <span>{product.rating}</span> Đánh giá
                            </span>
                            <span className="view">
                                <span>{product.sold}</span> Đã bán
                            </span>
                        </Prize>
                        <p className="heading-s">Giá</p>
                        <Price>
                            <span className="original">&#8363;{Number(product.price).toLocaleString('en-US')}</span>
                            {Number(product.price * (1 - product.discount / 100)).toLocaleString('en-US')} &#8363;
                        </Price>
                        <p className="heading-s">Size sản phẩm: </p>
                        <Size>
                            {btns.map((btn, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSize(btn)}
                                    className={`size btn btn-outline ${btn === size ? 'active' : ''}`}
                                >
                                    {btn}
                                </button>
                            ))}
                        </Size>
                        <p className="heading-s">Số lượng</p>
                        <Quantity>
                            <button
                                onClick={() => decreaseQuantity()}
                                className={`up btn btn-outline ${quantity > 0 ? '' : 'disable'}`}
                            >
                                <AiOutlineMinus />
                            </button>
                            <p className="quantity">{quantity}</p>
                            <button
                                onClick={() => increaseQuantity()}
                                className={`up btn btn-outline ${quantity >= product.quantity ? 'disable' : ' '}`}
                            >
                                <AiOutlinePlus />
                            </button>
                        </Quantity>
                        <p className="heading-s">Tồn kho</p>
                        <p className="quantity">{product.quantity > 0 ? `Còn hàng` : `Hết Hàng`}</p>

                        <BuyBtn>
                            <button className="btn btn-primary">Mua ngay</button>
                            <button className="btn btn-outline" onClick={(e) => addProductToCartHandle(e, product.id)}>
                                <i>
                                    <BsBagCheckFill />
                                </i>
                                Thêm vào giỏ hàng
                            </button>
                        </BuyBtn>
                    </Details>
                    <Order>
                        <p className="heading-s">Mô tả</p>
                        <Description>{product.description}</Description>
                    </Order>
                </Container>
            )}
        </>
    );
}

export default ProductDetails;
