import Product from './Product';
function ItemCart({ products }) {
    const removeProduct = () => {};
    return (
        <>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </>
    );
}

export default ItemCart;
