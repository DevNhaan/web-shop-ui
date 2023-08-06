import { useEffect } from 'react';
import Breadcrumbs from '../../Breadcrumbs';
import ItemCart from '../../Layout/ItemCart';
import { Order, Right, Container, ShoppingCart } from './Cart.style';
import { useDispatch, useSelector } from 'react-redux';
import { getCartByUserId } from '../../../Apis/CartApi';
import { getUserId, getToken } from '../../../redux/Selector/AuthSelector';
import httpRequest from '../../../Apis/request';
const products = [
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
    {
        id: Math.random().toString(36).substring(2, 7),
        name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt `,
        price: '200000',
        quantity: 10,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam id nemo consectetur doloremque consequuntur odit provident quo! Repellendus blanditiis voluptate quibusdam autem iusto nihil, eaque fuga itaque repudiandae vitae?`,
        star: '4.9',
        rating: '2k3',
        sold: '120',
        sale: 10,
        images: [
            '/sanpham.jpg',
            '/sanpham.png',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
            '/sanpham.jpg',
        ],
    },
];

function Cart() {
    const dispatch = useDispatch();
    const userId = useSelector(getUserId);
    const token = useSelector(getToken);
    console.log('userId ', userId, 'token ', token);
    useEffect(() => {
        getCartByUserId(userId, dispatch, httpRequest(token));
    }, [userId, dispatch, token]);

    return (
        <main className="container">
            <Breadcrumbs />
            <Container>
                <Right>
                    <ShoppingCart>
                        <ItemCart products={products} />
                    </ShoppingCart>
                </Right>
                <Order>
                    <p className="heading">Tổng cộng giỏ hàng</p>
                    <div className="row">
                        <p>Tổng</p>
                        <p>300,000 &#8363;</p>
                    </div>
                    <span className="line"></span>

                    <div className="discount">
                        <input type="text" placeholder="Nhập mã giảm giá" />
                        <button className="btn btn-outline">Áp dụng</button>
                    </div>

                    <button className="btn btn-primary">Tiến hành thanh toán</button>
                </Order>
            </Container>
        </main>
    );
}

export default Cart;
