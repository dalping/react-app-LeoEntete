import React from 'react';
import Goods from './Goods';
import * as Styled from './style';

function GoodsList({title,goods}) {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>{title}</h2>
            <Styled.GoodsList>
                {
                    goods.map(data => (
                        <Goods key={data.id} data={data}/>
                    ))
                }
            </Styled.GoodsList>
        </div>
    )
}

export default GoodsList
