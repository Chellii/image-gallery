import { 
    CardInfoStyle,
    CardInfoName,
    CardInfoLocation
} from "./style"
import LikeButton from "components/Buttons/LikeButton";

const CardInfo = (props) => {
    return (
        <CardInfoStyle>
          <div>
            <CardInfoName>{props.user.name}</CardInfoName>
            <CardInfoLocation>{props.user.location}</CardInfoLocation>
          </div>
          <div>
            <LikeButton />
          </div>
        </CardInfoStyle>
    )
}

export default CardInfo;