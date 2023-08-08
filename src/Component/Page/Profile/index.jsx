import { useSelector } from 'react-redux';
import { Container, Avatar, Infor } from './Profile.style.js';
import { BsPencilSquare, BsPencil } from 'react-icons/bs';
import { currentUserSelector } from '../../../redux/Selector/AuthSelector.js';

function Profile() {
    const currentUser = useSelector(currentUserSelector);

    console.log(currentUser);

    const { displayName, phone, email, address } = {
        username: 'tranhuunhan',
        email: 'devhuunhan@gmail.com',
        displayName: 'Tran Huu Nhan',
        phone: '0376578602',
        address: '131/14 Ha Huy Giap TP HCM',
    };

    const hiddenInfo = (string) => {
        return string.replace(string.substring(0, string.length / 3), '*'.repeat(string.length / 3));
    };

    return (
        <Container ainer className="container">
            <Avatar>
                <img src="/user.png" alt="user_image" />
                <span>
                    <BsPencil />
                </span>
            </Avatar>
            <Infor>
                <p className="heading-s">Hồ sơ của bạn</p>

                <div>
                    <strong>Tên: </strong>
                    <span>{displayName}</span>
                    <BsPencilSquare />
                </div>
                <div>
                    <strong>Email:</strong>
                    <span>{hiddenInfo(email)}</span>
                    <BsPencilSquare />
                </div>
                <div>
                    <strong>Số điện thoại:</strong>
                    <span>{hiddenInfo(phone)}</span>
                    <BsPencilSquare />
                </div>
                <div>
                    <strong>Địa chỉ: </strong>
                    <span>{address}</span>
                    <BsPencilSquare />
                </div>
            </Infor>
        </Container>
    );
}

export default Profile;
