import { useState } from "react"
import FilledHeart from "icons/FilledHeartIcon"
import StrokeHeart from "icons/StrokeHeartIcon"

const LikeButton = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    
    const handleClick = () => {
      setIsFavorite(!isFavorite)
    }
  
    return (
      <div className="container">
      <button onClick={handleClick} style={{border: 0, backgroundColor: '#111'}}>
        {
            isFavorite ? 
              <FilledHeart />
            :
              <StrokeHeart />
        }
      </button>
        </div>)
} 

export default LikeButton;
  