import React from "react";

const FadedLineBreak = () => {
  const hrStyle = {
    borderWidth: "0 0 4px",
    borderImage:
      "linear-gradient(90deg, rgba(238, 101, 3, 0), rgba(238, 101, 3, 1) 50%, rgba(238, 101, 3, 0) 100%) 0 0 100%",
    borderStyle: "solid",
    width: "100%",
  };

  return (
    <div className="my-6">
      <hr style={hrStyle} />
    </div>
  );
};

export default FadedLineBreak;
