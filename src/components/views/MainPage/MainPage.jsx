import React from 'react';
import Goods from './Goods';
import * as Styled from './style';

function MainPage() {
    return (
        <Styled.Main>
            <h2>BEST SELLER</h2>
            <Styled.GoodsList>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
                <Goods/>
            </Styled.GoodsList>
        </Styled.Main>
    )
}

export default MainPage
