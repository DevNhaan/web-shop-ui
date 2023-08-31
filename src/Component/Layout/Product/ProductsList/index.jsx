import { Description, ProductImg, ListWrap, ProductImgWrap, ButtonGroup } from './ProductsList.style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId } from '../../../../redux/Selector/AuthSelector';
import { addProductToCart } from '../../../../Apis/CartApi';
import httpRequest from '../../../../Apis/request';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function ProductsList({ products }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(getUserId);
    const token = useSelector(getToken);

    const addProductToCartHandle = (e, productId) => {
        e.preventDefault();
        if (userId === null) return navigate('/auth/login');

        const data = {
            userId: userId,
            productId: productId,
            quantity: 1,
        };
        addProductToCart(data, dispatch, httpRequest(token));
    };

    return (
        <>
            <ListWrap>
                {products.map((product, index) => {
                    return (
                        <Link to={`/details/${product.id}`} key={index} className="item">
                            <ProductImgWrap>
                                <ProductImg>
                                    <img src={product.images[0].url} alt="product" />
                                </ProductImg>
                                <div className="d-flex c-flex">
                                    <Tippy content="Thêm vào giỏ hàng">
                                        <button
                                            className="icon add-to-cart"
                                            onClick={(e) => addProductToCartHandle(e, product.id)}
                                        >
                                            <HiOutlineShoppingBag /> <span>Thêm vào giỏ hàng</span>
                                        </button>
                                    </Tippy>
                                </div>
                                <ButtonGroup>
                                    <Tippy content="Tìm kiếm" placement="left">
                                        <button className="search icon">
                                            <HiSearch />
                                        </button>
                                    </Tippy>
                                    <Tippy content="Thích sản phẩm" placement="left">
                                        <button className="like icon">
                                            <AiOutlineHeart />
                                        </button>
                                    </Tippy>
                                </ButtonGroup>
                            </ProductImgWrap>
                            <Description className="description">
                                <span className="title">{product?.title}</span>
                                <p className="name">{product?.name}</p>
                                <div className="star">
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                                <p className="price">{Number(product.price).toLocaleString('en-US')}VND</p>
                            </Description>
                        </Link>
                    );
                })}
            </ListWrap>
        </>
    );
}

export default ProductsList;
