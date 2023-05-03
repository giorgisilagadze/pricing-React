import styled from "styled-components";

export const Title = styled.h1`
    font-size: 32px;
    line-height: 39.01px;
    text-align: center;
    color: #6E728E;
    margin-top: 64px;

    @media(min-width: 1440px) {
        margin-top: 71px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
`

export const Annually = styled.h2`
    font-size: 15px;
    line-height: 28px;
    color: #6E728E;
    opacity: ${({opc}) => opc};
`

export const Month = styled(Annually)``

export const ToggleDiv = styled.div`
    width: 56px;
    height: 32px;
    border-radius: 16px;
    padding: 4px;
    background: linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%);

    @media(min-width: 1440px) {
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    }
`

export const Circle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    margin-left: ${({mLeft}) => mLeft};
    transition: .2s;
`