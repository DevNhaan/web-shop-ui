import { ProductsSlide } from '../Product';
import { More } from '..';
import { useSelector } from 'react-redux';
import { getSectionsProduct, getCategoryByTag } from '~/redux/Selector/ProductSelector';

function SectionProducts({ tag }) {
    const products = useSelector(getSectionsProduct(tag));
    const category = useSelector(getCategoryByTag(tag));
    return (
        <>
            {category && (
                <div>
                    <div className="heading-section">
                        <span>{category.title} </span>
                    </div>
                    <More path={category.tag} />
                    <ProductsSlide products={products} />{' '}
                </div>
            )}
        </>
    );
}

export default SectionProducts;
