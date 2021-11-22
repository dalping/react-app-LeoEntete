import styled from 'styled-components';

export const DetailArea = styled.div`
    width: 70%;
    padding: 20px;
    display: flex;
    gap: 20px;
    margin-bottom: 70px;
`;

export const InfoArea = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    table {
        width: 100%;
        border-top: 1px solid #DFDFDF;
        border-bottom: 1px solid #DFDFDF;

        td{
            padding:10px 0;
        }

        th{
            width: 30%;
            padding:10px 0;
        }
    }

    .totalPrice{
        display: flex;
        justify-content: right;
    }

    .option{
        display: flex;
        gap: 10px;
        flex-direction: column;
    
        li{
            padding: 10px;
            border: 1px solid black;
            background-color: #f0f0f0;
        }
    }

    .btnArea{
        display: flex;
        gap: 10px;

        a{
            text-align: center;
            width: 100%;
            padding: 10px;
            border: 1px solid black;
            cursor: pointer;

            &:nth-child(2){
            background-color: black;
            color: white;
            }
        }
    }
`;

export const GoodsImg = styled.div`
    width:50%;
    overflow: hidden;
    position: relative;
    padding-bottom: 50%;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

export const GoodsDetail = styled.div`

    display: flex;
    flex-direction: column;
    width: 70%;

    .goodsTabs{
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        border-bottom: 1px solid black;

        a{
            width: 20%;
            text-align: center;
            border-top: 1px solid #DFDFDF;
            border-left: 1px solid #DFDFDF;
            padding: 10px;
            cursor: pointer;
            margin-bottom: -1px;
            transition: background-color 0.3s;

            &:last-child{
                border-right: 1px solid #DFDFDF;
            }

            &:nth-child(${props => props.tab}){
                background-color: #f0f0f0;
                border: 1px solid black;
                border-bottom: 1px solid #f0f0f0;
            }
        }
    } 

    .tabItems{
        padding: 50px 0;
        border-bottom: 1px solid black;
        margin-bottom: 50px;
    }
`;

export const QnA = styled.div`
    display: flex;
    flex-direction: column;

    table{
        border-top: 1px solid #DFDFDF;
        border-bottom: 1px solid #DFDFDF;

        tr:first-child{
            border-bottom: 1px solid #DFDFDF;
        }

        th{
            padding: 10px 0;
        }

        td{
            padding:10px 0;
            text-align: center;

            &:nth-child(2){
                width: 50%;
                text-align: left;
            }
        }
    } 
`;

export const Notice = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 50%;
    }  
`;

export const Details = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    .goodsImg{
        width: 100%;
    } 

    .sizeInfo{
        margin-top: 100px;
        width: 80%;
    }
`;