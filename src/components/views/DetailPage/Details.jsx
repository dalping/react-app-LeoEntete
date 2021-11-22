import React from 'react'
import * as Styled from './style';

function Details({img}) {
    return (
        <Styled.Details>
            {
                img.map((data, idx) => (
                    <img className="goodsImg" src={data}/>
                ))
            }
            <img className="sizeInfo" src="https://github.com/dalping/Image-Save/blob/main/antete/%EC%A4%84%EB%AC%B4%EB%8A%AC%20%EA%B0%95%EC%95%84%EC%A7%80%20%EC%98%B7%20%EC%B9%98%EC%88%98%ED%91%9C.png?raw=true"/>
        </Styled.Details>
    )
}

export default Details
