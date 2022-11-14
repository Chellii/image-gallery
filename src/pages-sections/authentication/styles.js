import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;

`

export const LayoutLeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const LeftSideBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 550px;
    padding: 0 0.62em;
`


export const LayoutRightSide = styled.div`
    width: 50%;
    background-image: url('https://images.unsplash.com/photo-1494809610410-160faaed4de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const FormElemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.8em;

    button {
        width: 30%;
        border-radius: 3px;
        font-size: 17; 
        padding: 13px 12px; 
        background-color: black; 
        color:white; 
        border: 0; 
        border-radius: 5;
        min-width: 80px;
    }

`

export const InputContainer = styled.div`
    width: 100%;

    p {
        margin: 0;
        font-weight: 500;
    }

    @media(max-width: 1300px) {
       width: 80%;
    }
`
