import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIsLike] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleButton = () => {
    // console.log("Toggle starting in here");
    let newValue = !isLike;
    console.log(newValue);
    setClicks(clicks+1)
  };
  // let click = () => { console.log("clicked successfully"); }
  return (
    <div>
        <p > Clicks = {clicks} </p>
      <p onClick={toggleButton}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        {/* {isLike.toString()} */}
        {/* <p onClick={click}> */}
      </p>
    </div>
  );
}
