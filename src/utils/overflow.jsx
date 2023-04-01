import React, { useEffect } from "react";

function CheckOverflow() {
  useEffect(() => {
    Array.from(document.querySelectorAll("*")).forEach((a) => {
      a.style.outline =
        "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
  }, []);

  return <div>{/* your app content here */}</div>;
}

export default CheckOverflow;
