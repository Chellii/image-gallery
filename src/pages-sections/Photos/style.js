import styled from 'styled-components'

export const CardInfoStyle = styled.div`
    z-index: 2;
    width: 100%;
    position: absolute;
    bottom: -100px;
    transition: all 0.7s ease;
    display: flex;
    justify-content: space-between;
    padding: 1.25em;
    box-sizing: border-box;
    min-height: 5em;
    background: #111;

    div {
        display: flex;
        flex-direction: column;
    }
`

export const CardInfoName = styled.span`
    text-transform: uppercase;
    margin-bottom: 0.62em;
    font-weight: 700;
    letter-spacing: 0.06emm;
    text-align: center;
    color: #fff;
    font-size: 1em;

    @media(max-width: 1300px) {
        font-size: 0.8rem;
    }
    @media(max-width: 1100px) {
        font-size: 0.6rem;
    }
    @media(max-width: 1000px) {
        font-size: 0.9rem;
    }
    @media(max-width: 500px) {
        font-size: 0.9rem;
    }
    @media(min-width: 1600px) {
        font-size: 0.9rem;
    }
`

export const CardInfoLocation = styled.span`
    font-size: 0.87em;
    color: red;
    text-align: center;
    font-weight: 700;
    @media(max-width: 1300px) {
        font-size: 0.6rem;
    }
    @media(max-width: 1100px) {
        font-size: 0.5rem;
    }
    @media(max-width: 1000px) {
        font-size: 0.8rem;
    }
    @media(max-width: 500px) {
        font-size: 0.8rem;
    }
    @media(min-width: 1600px) {
        font-size: 0.8rem;
    }
`

export const CardImageStyle = styled.div`
    z-index: 1;
    height: 100%;

    img {
        height: 100%;
        width: 100%;
        transition: all 0.5s ease;
        transform: scale(1.2);
    }
`