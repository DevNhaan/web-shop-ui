import { Description, ProductImg, ListWrap, Button } from './ProductsList.style';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserId } from '../../../../redux/Selector/AuthSelector';
import { addProductToCart } from '../../../../Apis/CartApi';
import httpRequest from '../../../../Apis/request';

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
                            <div className="img">
                                <ProductImg>
                                    <img src={product.images[0].url} alt="product" />
                                </ProductImg>
                                <Button>
                                    <button className="btn btn-s btn-primary">Mua ngay</button>
                                    <button
                                        onClick={(e) => addProductToCartHandle(e, product.id)}
                                        className="btn btn-s btn-outline"
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </Button>
                            </div>
                            <Description className="description">
                                <span className="title">{product?.title}</span>
                                <p className="name">{product?.name}</p>
                                <span className="star">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </span>
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
