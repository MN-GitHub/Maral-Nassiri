import React from "react";
import "../../styles/Subpages.css";
import "../../styles/General.css";

function SubpageLayout({ title, children }) {
  return (
    <div className="subpage-container">
      {title && <h2 className="subpage-heading">{title}</h2>}
      {children}
    </div>
  );
}

export default SubpageLayout;
