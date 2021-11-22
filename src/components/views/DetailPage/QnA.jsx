import React from 'react';
import * as Styled from './style';

function QnA() {
    return (
        <Styled.QnA>
            <span>PRODUCT QnA</span>
            <table>
                <tr className="thead">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회</th>
                    <th>평점</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>조회</td>
                    <td>평점</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>작성일</td>
                    <td>조회</td>
                    <td>평점</td>
                </tr>
            </table>
        </Styled.QnA>
    )
}

export default QnA
