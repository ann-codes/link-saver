import React from "react";

// broken-heart icon from: 
// https://www.flaticon.com/free-icon/broken-heart_3650501

const Error404 = () => {
  return (
    <div className="error404">
      <h1>Something is broken...</h1>
      <img
        src="broken-heart.svg"
        alt="maintenance symbols"
        className="maintenance-img"
      />
    </div>
  );
};

export default Error404;
