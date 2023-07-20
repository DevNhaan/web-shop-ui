import { Description, ProductImg, ListWrap } from './ProductsList.style';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

function ProductsList({ products }) {
    return (
        <ListWrap>
            {products.map((product, index) => {
                return (
                    <Link to={`/details/${product.id}`} key={index} className="item">
                        <div className="img">
                            <ProductImg>
                                <img src={product.image} alt="product" />
                            </ProductImg>
                        </div>
                        <Description className="description">
                            <span className="title">{product.title}</span>
                            <p className="name">{product.name}</p>
                            <span className="star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                            <p className="price">{product.price} VND</p>
                        </Description>
                    </Link>
                );
            })}
        </ListWrap>
    );
}

export default ProductsList;
