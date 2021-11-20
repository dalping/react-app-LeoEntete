import styled from 'styled-components';



export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
export const GoodsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
    `;

export const Goods = styled.div`
    display: flex;
    width: 20rem;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all 0.3s;

    .goodsImage{
        width: 90%;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 10px;
        overflow: hidden;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.0);
            transition: transform 0.5s;
        }
    }

    .name{
        font-weight: 1000;
        margin-bottom: 10px;
    }

    .price{
        font-size: 0.9rem;
    }

    &:hover{
        background-color: #F0F0F0;
        cursor: pointer;

        .goodsImage > img {
            transform: scale(1.2);
            transition: transform 0.5s;
        }
    }
`;