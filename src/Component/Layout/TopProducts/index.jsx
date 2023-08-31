import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { ProductsList } from '../Product';
import { getProducts } from '../../../redux/Selector/ProductSelector';
import { More } from '..';
const Heading = styled.div`
    font-size: 2.6rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    line-height: 1;
    margin: 50px 0 20px 0;
`;

function TopProducts() {
    const products = useSelector(getProducts);
    return (
        <div>
            <Heading>sản phẩm bán chạy nhất</Heading>
            <More path="/top-products" />
            <ProductsList products={products} />
        </div>
    );
}

export default TopProducts;
