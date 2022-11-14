import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 320px;
    padding-top: 5em;
    justify-content: center;

    h1 {
        flex-basis: 100%;
        text-align: center;
        margin: 2em auto 1em;
        text-transform: uppercase;
        font-size: 1.87em;
        letter-spacing: 0.13em;
        color: #111;
    }

    @media screen and (max-width: 1000px) {
        font-size: 0.8rem;
    }

`

export const Card = styled.div`
    width: 20%;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    margin: 1.25em 0.63em;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    &:hover {
        div:first-of-type {
            bottom: 0px;
            color: #fff;
        } 
        div > img {
            transform: scale(1);
        }
    }

    @media(min-width: 1600px) {
        font-size: 1.2rem;
        width: 13%;
    }

    @media(max-width: 1000px) {
        font-size: 1.2rem;
        width: 30%;
    }

    @media(max-width: 800px) {
        font-size: 1.2rem;
        width: 50%;
    }

    @media(max-width: 500px) {
        font-size: 0.8rem;
        width: 100%;
    }
`


