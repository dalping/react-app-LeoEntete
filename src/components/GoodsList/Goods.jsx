import React from 'react';
import * as Styled from './style';
import {useNavigate} from 'react-router-dom';

function Goods({data}) {

    const navigate = useNavigate();

    return (
        <Styled.Goods onClick={()=>{navigate(`/detail/${data.id}`)}}>
            <div className="goodsImage">
                <img src={data.thumb}/>
            </div>
            <strong className='name'>{data.title}</strong>
            <span className='price'>{`${data.price}`}</span>
        </Styled.Goods>
    )
}

export default Goods
