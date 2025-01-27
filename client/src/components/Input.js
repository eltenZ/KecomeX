import React from "react";

const Input = () => {
  // Style for the input wrapper
  const inputWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "auto"
  };

  // Style for the input element
  const inputStyle = {
    padding: "4px 8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "box-shadow 0.3s ease-in-out"
  };

  // Style for the input element when it is focused
  const focusStyle = {
    boxShadow: "0 0 5px rgba(81, 203, 238, 1)",
    borderColor: "rgba(81, 203, 238, 1)"
  };

  // Handling the focus event to apply styles
  const handleFocus = event => {
    Object.assign(event.target.style, focusStyle);
  };

  // Handling the blur event to remove styles
  const handleBlur = event => {
    Object.assign(event.target.style, inputStyle);
  };
  return <div style={inputWrapperStyle} data-id="element-0">
      <input type="text" placeholder="Search..." style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} data-id="element-1" />
    </div>;
};
export default Input;
