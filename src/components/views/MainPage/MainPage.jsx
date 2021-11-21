import React from 'react';
import Goods from './Goods';
import * as Styled from './style';
import { goods } from '../../../db/data';

function MainPage() {

    console.log(goods);

    return (
        <Styled.Main>
            <h2>BEST SELLER</h2>
            <Styled.GoodsList>
                {
                    goods.map(data => (
                        <Goods key={data.id} data={data}/>
                    ))
                }
            </Styled.GoodsList>
        </Styled.Main>
    )
}

export default MainPage
