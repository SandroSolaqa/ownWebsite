import React from 'react';

function MenuItem(props) {
  return (
    <div className={`food-type ${props.type}`}>
      <div className="img-container">
        <img src={props.imageSrc} alt="error" />
        <div className="img-content">
          <h3>{props.title}</h3>
          <a href={props.link} className="btn btn-primary" target="_blank">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
