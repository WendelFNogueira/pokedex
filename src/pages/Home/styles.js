import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.h1``;

export const Button = styled.button`
    border: none;
    background-color: #FFBFC0;
    padding: 1rem;
    border-radius: 1rem;
    :hover{
        background-color: #CF0C0F;
        transition: .3s;
    }
`;
