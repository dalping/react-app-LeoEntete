import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;

    .right{
        display: flex;
        gap: 10px;
    }
`;

export const Banner = styled.div`
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;
`;