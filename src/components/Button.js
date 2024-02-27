import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-neutral-800 mr-4 px-4 py-1 rounded-md text-white font-semibold">
      <button>{name}</button>
    </div>
  );
};

export default Button;
