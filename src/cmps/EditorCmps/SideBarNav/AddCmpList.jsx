import React from "react";

export function AddCmpList({ cmps, sectionType }) {
    console.log('cmps',cmps
    .filter((cmp) => cmp.sectionType === sectionType),'sectionType',sectionType)
  return (
    <ul className="clean-list">
      {cmps
        .filter((cmp) => cmp.sectionType === sectionType)
        .map((cmp,idx) => {
          return <li key={idx}>{cmp.sectionType}</li>;
        })}
    </ul>
  );
}
