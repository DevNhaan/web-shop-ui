import { ProductsList } from '../Product';
import { SectionWrap, Heading } from './TopProducts.style';
import { Link } from 'react-router-dom';
const products = [
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
    {
        id: '1',
        image: '/sanpham.png',
        title: 'title text description',
        name: 'Name production',
        price: '200,000',
    },
];
function TopProducts() {
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
