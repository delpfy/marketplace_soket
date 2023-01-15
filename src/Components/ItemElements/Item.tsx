import React, { useState } from "react";

import "../../styles/style.css";

export const Item = (props:any) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="item__body">
      <div
        onClick={() =>
          setImageIndex(imageIndex - 1 !== -1 ? imageIndex - 1 : imageIndex)
        }
        className="item__body_image_changeBackward"
      >
        <button className="item__body_image_changeBackward_button">
          {" "}
          {"<"}{" "}
        </button>
      </div>
      <img
        className="item__body_image"
        src={props.image[imageIndex]}
        alt={props.name}
      ></img>
      <div
        onClick={() =>
          setImageIndex(imageIndex + 1 !== 3 ? imageIndex + 1 : imageIndex)
        }
        className="item__body_image_changeForward"
      >
        <button className="item__body_image_changeForward_button">
          {" "}
          {">"}{" "}
        </button>
      </div>
      <div className="item__body_subcontent">
        <h1>{props.name}</h1>
        <h1>{props.price}₴</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Item;
