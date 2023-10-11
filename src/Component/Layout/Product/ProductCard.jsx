import { Link, useNavigate } from 'react-router-dom';
import { Description, ProductImg, ProductImgWrap, ButtonGroup, Sale } from './Product.style';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId } from '../../../redux/Selector/AuthSelector';
import { addProductToCart } from '../../../Apis/CartApi';
import httpRequest from '../../../Apis/request';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(getUserId);
    const token = useSelector(getToken);

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
            <Link to={`/details/${product.id}`} key={product.id} className="item">
                <ProductImgWrap>
                    <ProductImg>
                        <img src={product.avatar} alt="product" />
                    </ProductImg>
                    <div className="d-flex c-flex">
                        <Tippy content="Thêm vào giỏ hàng">
                            <button className="icon add-to-cart" onClick={(e) => addProductToCartHandle(e, product.id)}>
                                <HiOutlineShoppingBag size={20} />
                                <span>Thêm vào giỏ hàng</span>
                            </button>
                        </Tippy>
                    </div>
                    <ButtonGroup>
                        <Tippy content="Tìm kiếm" allowHTML={false} placement="left">
                            <button className="search icon">
                                <HiSearch />
                            </button>
                        </Tippy>
                        <Tippy content="Thích sản phẩm" allowHTML={false} placement="left">
                            <button className="like icon">
                                <AiOutlineHeart />
                            </button>
                        </Tippy>
                    </ButtonGroup>
                    <Sale>- {product.discount}%</Sale>
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
        </>
    );
}

export default ProductCard;
