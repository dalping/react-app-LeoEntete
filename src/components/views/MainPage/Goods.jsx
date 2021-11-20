import React from 'react';
import * as Styled from './style';

function Goods() {

    return (
        <Styled.Goods>
            <div className="goodsImage">
                <img src={require('./stripe.jpg').default}/>
            </div>
            <span className='name'>줄무늬 티셔츠</span>
            <span className='price'>12,500</span>
        </Styled.Goods>
    )
}

export default Goods
