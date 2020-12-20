import React from 'react';
import "./image.css";

const Image = ({ id, name, image, onClick }) =>
    <img
        className="clickImg"
        src={image}
        alt={name}
        name={name}
        onClick={() => onClick(id)}
    />;

export default Image;