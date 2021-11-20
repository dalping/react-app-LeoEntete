import React,{useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import * as Styled from './style';

function NavBar(props) {

    const [OpenDrawer, setOpenDrawer] = useState(false)

    const navigate = useNavigate();

    const openDrawerHandler = () => {
        setOpenDrawer(!OpenDrawer);
    } 

    return (
        <>
        <Styled.Nav>
            <Styled.Menu>
                <div className="left">
                    <div onClick={openDrawerHandler}>menu</div>
                </div>
                <div className="right">
                    <span>Login</span>
                    <span>Join</span>
                    <span>MyPage</span>
                    <span>Cart</span>
                </div>
            </Styled.Menu>
            <Styled.Banner>
                <img src={require('./logo.jpg').default} onClick={()=>{navigate('/')}}></img>
            </Styled.Banner>
        </Styled.Nav>
        <Styled.Drawer open={OpenDrawer}>
            <div className="drawerBackground" onClick={openDrawerHandler}></div>
            <div className="leftDrawer">
                <div className="userInfo">
                    <span>로그인 하세요</span>
                    <div className="right">
                        <div>로그인</div>
                        <div style={{backgroundColor:'#F0F0F0'}}>회원가입</div>
                    </div>
                </div>
                <div className="menu">
                    <div>주문조회</div>    
                    <div>My쇼핑</div>    
                    <div>1:1문의</div>    
                    <div>장바구니</div>    
                </div>
                <div className="category">
                    <h3 style={{marginBottom:'20px'}}>카테고리</h3>
                    <ul>
                        <li>Cloth</li>
                        <li>Accessory</li>
                        <li>Shoes</li>
                    </ul>
                </div>
            </div>   
        </Styled.Drawer>   
        </>
    )
}

export default NavBar;
