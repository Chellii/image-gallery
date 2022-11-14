import styled from 'styled-components';
import { CardImageStyle } from './style';

const CardImage = (props) => {
    return (
        <CardImageStyle>
            <img src={props.urls.regular} alt="" />
        </CardImageStyle>
    )
}

export default CardImage;