import React from 'react';
import {AuthLayoutContainer, LayoutLeftSide, LeftSideBox, LayoutRightSide} from './styles'

const AuthenticationLayout = ({children, title, subTitle}) => {
    return (
        <AuthLayoutContainer>
            <LayoutLeftSide>
                <LeftSideBox>
                    <h1 style={{margin: 0}}>{title}</h1>
                    <p style={{color: 'grey'}}>{subTitle}</p>
                    {children}
                </LeftSideBox>
            </LayoutLeftSide>
            <LayoutRightSide />
        </AuthLayoutContainer>
    )
}

export default AuthenticationLayout;