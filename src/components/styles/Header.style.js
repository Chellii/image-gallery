import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
    z-index: 99;
    width: 100%;
    background-color: white;

    h3 {
        margin-left: 50px;
        padding: 5 10;
    }
    button {
        margin-right: 50px;
        border: 0;
        background-color: white;
        color: black;
        &:hover {
            background-color: red;
            padding: 5 10;
            padding: 8px 10px;
            color: white;
            border-radius: 5px;
        }
    }
`