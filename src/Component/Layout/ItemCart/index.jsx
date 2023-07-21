import Product from './Product';
function ItemCart({ products }) {
    return (
        <>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </>
    );
}

export default ItemCart;
