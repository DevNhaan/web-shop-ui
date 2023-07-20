import { useState } from 'react';
import {
    Order,
    Details,
    ImageContainer,
    Container,
    MainImg,
    ListImg,
    Nav,
    Name,
    Prize,
    Price,
    Size,
    Description,
    Quantity,
    BuyBtn,
} from './ProductDetails.style';
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsBagCheckFill } from 'react-icons/bs';
const btns = ['s', 'm', 'l', 'xl'];
const product = {
    name: `Áo Thun Nam Essentials Men's Regural-Fit Long-Sleeve Oxford Shirt`,
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
};
function ProductDetails() {
    const [size, setSize] = useState('s');
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setImage] = useState(product.images[0]);
    const increaseQuantity = () => {
        if (quantity >= parseInt(product.quantity)) return;
        setQuantity((prev) => prev + 1);
    };
    const decreaseQuantity = () => {
        if (quantity === 0) return;
        setQuantity((prev) => prev - 1);
    };

    return (
        <>
            <Nav>
                HOME <span>&#62;</span> PRODUCT DETAILS
            </Nav>
            <Container>
                <ImageContainer>
                    <ListImg className="align-center-flex" id="scrollbar">
                        {product.images.map((image, i) => (
                            <div
                                onClick={() => setImage(image)}
                                className={`item ${image === currentImage ? 'active' : ''}`}
                            >
                                <img key={i} src={image} alt="san pham" />
                            </div>
                        ))}
                        <div class="force-overflow"></div>
                    </ListImg>
                    <MainImg>
                        <img src={currentImage} alt="san pham" />
                    </MainImg>
                </ImageContainer>
                <Details>
                    <p className="heading-s">Danh mục: Thời trang</p>
                    <Name>{product.name}</Name>
                    <Prize className="align-center-flex">
                        <span className="rating">
                            <i>
                                <AiFillStar />
                            </i>
                            <span>{product.star}</span>
                        </span>
                        <span className="view">
                            <span>{product.rating}</span> Đánh giá
                        </span>
                        <span className="view">
                            <span>{product.sold}</span> Đã bán
                        </span>
                    </Prize>
                    <p className="heading-s">Giá</p>
                    <Price>
                        <span className="original">&#8363;{Number(product.price).toLocaleString('en-US')}</span>
                        {Number(product.price * (1 - product.sale / 100)).toLocaleString('en-US')} &#8363;
                    </Price>
                    <p className="heading-s">Size sản phẩm: </p>
                    <Size>
                        {btns.map((btn) => (
                            <button
                                onClick={() => setSize(btn)}
                                className={`size btn btn-s btn-outline ${btn.match(size) ? 'active' : ''}`}
                            >
                                {btn}
                            </button>
                        ))}
                    </Size>
                    <p className="heading-s">Số lượng</p>
                    <Quantity>
                        <button
                            onClick={() => decreaseQuantity()}
                            className={`up btn btn-outline btn-s ${quantity > 0 ? '' : 'disable'}`}
                        >
                            <AiOutlineMinus />
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button
                            onClick={() => increaseQuantity()}
                            className={`up btn btn-outline btn-s ${quantity >= product.quantity ? 'disable' : ' '}`}
                        >
                            <AiOutlinePlus />
                        </button>
                    </Quantity>
                    <p className="heading-s">Tồn kho</p>
                    <p className="quantity">{product.quantity > 0 ? `Còn hàng` : `Hết Hàng`}</p>

                    <BuyBtn>
                        <button className="btn btn-primary">Mua ngay</button>
                        <button className="btn btn-outline">
                            <i>
                                <BsBagCheckFill />
                            </i>
                            Thêm vào giỏ hàng
                        </button>
                    </BuyBtn>
                </Details>
                <Order>
                    <p className="heading-s">Mô tả</p>
                    <Description>{product.description}</Description>
                </Order>
            </Container>
        </>
    );
}

export default ProductDetails;
