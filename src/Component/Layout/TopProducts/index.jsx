import { useSelector } from 'react-redux';
import { ProductsList } from '../Product';
import { SectionWrap, Heading } from './TopProducts.style';
import { Link } from 'react-router-dom';
import { getProducts } from '../../../redux/Selector/ProductSelector';

function TopProducts() {
    const products = useSelector(getProducts);
    return (
        <SectionWrap>
            <Heading>
                <h1>sản phẩm bán chạy nhất</h1>
                <Link to="/products" className="btn btn-outline">
                    Xem tất cả
                </Link>
            </Heading>
            <ProductsList products={products} />
        </SectionWrap>
    );
}

export default TopProducts;
