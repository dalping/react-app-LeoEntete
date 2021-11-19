import React from 'react';
import * as Styled from './style';

function NavBar() {
    return (
        <Styled.Nav>
            <Styled.Menu>
                <div className="left">
                    <div>menu</div>
                </div>
                <div className="right">
                    <span>Login</span>
                    <span>Join</span>
                    <span>MyPage</span>
                    <span>Cart</span>
                </div>
            </Styled.Menu>
            <Styled.Banner>
                <img src={require('./logo.jpg').default}></img>
            </Styled.Banner>
        </Styled.Nav>
    )
}

export default NavBar
