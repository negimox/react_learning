// Functional Component
import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h3>{count}</h3>
      <h3>Chetan Pandey (Functional)</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h3>Dehradun</h3>
      <h4>Contact: @negimox</h4>
    </div>
  );
};

export default User;
