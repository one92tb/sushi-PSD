import React from "react";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1440 }}>
      {children}
    </div>
  )
};
