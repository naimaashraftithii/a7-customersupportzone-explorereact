import React from "react";

// Container component for consistent 10/12 width and centered content
const Container = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
      {children}
    </div>
  );
};

export default Container;
