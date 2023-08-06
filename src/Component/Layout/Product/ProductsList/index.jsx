import { Description, ProductImg, ListWrap, Button } from './ProductsList.style';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { toast } from 'react-toastify';

function ProductsList({ products }) {
    const addProductToCart = (e) => {
        e.preventDefault();
        toast.success('Thêm sản phẩm thành công');
    };

    return (
        <>
            <ListWrap>
                {products.map((product, index) => {
                    return (
                        <>
                            <Link to={`/details/${product.id}`} key={index} className="item">
                                <div className="img">
                                    <ProductImg>
                                        <img src={product.images[0].url} alt="product" />
                                    </ProductImg>
                                    <Button>
                                        <button onClick={(e) => addProductToCart(e)} className="btn btn-s btn-primary">
                                            Mua ngay
                                        </button>
                                        <button onClick={(e) => addProductToCart(e)} className="btn btn-s btn-outline">
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
                        </>
                    );
                })}
            </ListWrap>
        </>
    );
}

export default ProductsList;
