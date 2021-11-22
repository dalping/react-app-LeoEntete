import React, {useState} from 'react'
import * as Styled from './style';
import { useParams } from 'react-router-dom';
import { goods } from '../../../db/data';
import QnA from './QnA';
import Review from './Review';
import Notice from './Notice';
import Details from './Details';

function DetailPage() {

    const id = useParams().id;
    const goodsInfo = goods.find(x => x.id === parseInt(id));
    const [SelectedItems, setSelectedItems] = useState(['apple','banana']);
    const [TabContent, setTabContent] = useState(1);

    const showTapItem = () => {
        switch(TabContent){
            case 1:
                return <Details img={goodsInfo.img}/>
            case 2:
                return <Review/>
            case 3:
                return <QnA/>
            case 4:
                return <Notice/>
        }
    }

    const setSelectItemHandler = (e) => {
        console.log(e.target.options.selectedIndex);
        
    }

    return (
        <div className="container" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Styled.DetailArea>
                <Styled.GoodsImg>
                    <img src={goodsInfo.thumb}></img>
                </Styled.GoodsImg>
                <Styled.InfoArea>
                    <h2>{goodsInfo.title}</h2>
                    <table>
                        <tr>
                            <th><span>판매가</span></th>
                            <td><span>{goodsInfo.price}</span></td>
                        </tr>
                        <tr>
                            <th><span>배송방법</span></th>
                            <td><span>택배</span></td>
                        </tr>
                        <tr>
                            <th><span>배송비</span></th>
                            <td><span>2,500</span></td>
                        </tr>
                        <tr>
                            <th><span>적립</span></th>
                            <td><span>5%</span></td>
                        </tr>
                    </table>
                    <div className="option">
                        <span>상품옵션</span>
                        <select onChange={setSelectItemHandler}>
                            <option>--선택--</option>
                            <option>체리</option>
                            <option>바나나</option>
                            <option>사과</option>
                        </select>
                        <ul>
                        {
                            SelectedItems.map((data,idx) =>(
                                <li key={idx}>{data}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="totalPrice">
                        <span>Total Price : </span>
                        <span>{"1000원"}</span>
                    </div>
                    <div className="btnArea">
                        <a>바로구매</a>
                        <a>장바구니</a>
                    </div>
                </Styled.InfoArea>
            </Styled.DetailArea>
            <Styled.GoodsDetail tab={TabContent}>
                <div className="goodsTabs">
                    <a onClick={()=>{setTabContent(1)}}>상세설명</a>
                    <a onClick={()=>{setTabContent(2)}}>상품후기</a>
                    <a onClick={()=>{setTabContent(3)}}>상품문의</a>
                    <a onClick={()=>{setTabContent(4)}}>교환/반품/배송</a>
                </div>
                <div className="tabItems">
                    {showTapItem()}
                </div>
            </Styled.GoodsDetail>
        </div>
    )
}

export default DetailPage
