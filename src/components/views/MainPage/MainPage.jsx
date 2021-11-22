import React from 'react';
import * as Styled from './style';
import { goods } from '../../../db/data';
import GoodsList from '../../GoodsList/GoodsList';

function MainPage() {

    return (
        <Styled.Main>
            <GoodsList title="BEST SELLER" goods={goods}/>
            <GoodsList title="NEW ITEMS" goods={goods}/>
        </Styled.Main>
    )
}

export default MainPage
