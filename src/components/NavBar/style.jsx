import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
`;

export const Menu = styled.div`
    display: flex;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;

    .left{
        & > div {
            cursor: pointer;
        }
    }

    .right{
        display: flex;
        gap: 10px;
        
        & > span {
            transition: all 0.25s;
            cursor: pointer;

            &:hover{
                font-size: 1.25rem;
                color: grey;
            }
        }
    }
`;

export const Banner = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;

    & > img {
        cursor: pointer;
    }
`;

export const Drawer = styled.div`
    
    .drawerBackground{
        position: fixed;
        top:0;
        left:${props => (props.open ? '0vw' : '-100vw')};
        background-color:${props => (props.open ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)')};
        width: 100vw;
        height: 100%;
        transition: background-color 0.5s;
        z-index: 10;
    }
    
    .leftDrawer{
        position: fixed;
        top:0;
        left:${props => (props.open ? '0vw' : '-25vw')};
        width: 25vw;
        height: 100vh;
        background-color: white;
        transition: left 0.5s ease-in;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 30px 20px;
        z-index: 10;

        .userInfo{
            display: flex;
            justify-content: space-between;
            align-items: center;

            & > span {
                color: grey;
            }

            .right{
                display: flex;
                gap: 5px;

                & > div {
                    border: 1px solid black;
                    padding: 5px;
                }
            }
        }

        .menu{
            display: flex;
            gap: 10px;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            margin: 20px 0 50px 0;
            box-sizing: border-box;
            padding: 20px 10px;
        }
    }
`;