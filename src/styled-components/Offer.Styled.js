import styled from "styled-components";
import { Container } from "./Toggle.Styled";

export const MainDiv = styled.div`
    width: 375px;
    margin: 80px auto 0px;
    padding: 0px 24px 71px;

`

export const OfferDiv = styled.div`
    width: 327px;
    padding: 31px 29px;
    box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
    border-radius: 10px;
    background: ${({bg}) => bg};
    margin-top: 32.5px;
`

export const OfferTitle = styled.h1`
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: ${({cl}) => cl};
`

export const PriceDiv = styled(Container)`
    gap: 7.46px;
    margin-top: 24px;
    padding-bottom: 20px;
`

export const Dollar = styled.p`
    font-size: 40px;
    line-height: 48.76px;
    letter-spacing: -1.2px;
    color: ${({cl}) => cl};
`

export const Price = styled.p`
    font-size: 72px;
    line-height: 71px;
    letter-spacing: -2.16px;
    color: ${({cl}) => cl};
`

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border: none;
    margin-top: 12px;
    background-color: ${({bg}) => bg};
    opacity: .25;
`

export const Prop = styled.p`
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    color: ${({cl}) => cl};
    margin-top: 12px;
`

export const Butt = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 6px;
    background: ${({bg}) => bg};
    border: none;
    margin: 32px auto 0px;
    font-size: 13px;
    line-height: 15.85px;
    letter-spacing: 1.39px;
    color: ${({cl}) => cl};
`