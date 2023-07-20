import { ProductDetails } from '../../Layout/Product';
const product = {
    id: '1',
    image: '/sanpham.png',
    title: 'title text description',
    name: 'Name production',
    price: '200,000',
};
function DetailsProduct() {
    return (
        <main className="container">
            <ProductDetails product={product} />
        </main>
    );
}

export default DetailsProduct;
