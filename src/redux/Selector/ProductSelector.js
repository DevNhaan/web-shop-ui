import { createSelector } from '@reduxjs/toolkit';
//AllProduct
export const getAllProducts = (state) => state?.allProducts?.products;
export const getCurrentPage = (state) => state?.allProducts?.currentPage;
export const getPerPage = (state) => state?.allProducts?.productPerpage;

export const getCategories = (state) => state.categories.categories;

export const getSectionsProduct = (tag) => {
    return createSelector(getCategories, getAllProducts, (categories, products) => {
        const topProductCate = categories.find((cate) => cate.tag === tag);
        if (topProductCate)
            return products.filter((product) => product.categories.some((cate) => cate.id === topProductCate.id));
        return [];
    });
};
export const getCategoryByTag = (tag) => {
    return createSelector(getCategories, (categories) => {
        const topProductCate = categories.find((cate) => cate.tag === tag);
        if (topProductCate) return topProductCate;
    });
};
export const getPageAllProduct = createSelector(
    getAllProducts,
    getCurrentPage,
    getPerPage,
    (allProducts, currentPage, productPerpage) => {
        const indexOfLastPage = currentPage * productPerpage;
        const indexofFirstPage = indexOfLastPage - productPerpage;
        const visibleTodos = allProducts.slice(indexofFirstPage, indexOfLastPage);

        return visibleTodos;
    },
);
export const getTotalPage = createSelector(getAllProducts, getPerPage, (products, perPage) => {
    return Math.ceil(products.length / perPage);
});
