import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.mon = "hello there";
  }, []);

  return (
    <div>
      <div>Hello there</div>
      <button onClick={() => console.log(window.mon)}>Press me!</button>
    </div>
  );
};

export default {
  component: Home
};
