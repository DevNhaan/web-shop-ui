import { ListWrap } from './Product.style';
import ProductCard from './ProductCard';

function ProductsList({ products }) {
    return (
        <>
            <ListWrap>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </ListWrap>
        </>
    );
}

export default ProductsList;
