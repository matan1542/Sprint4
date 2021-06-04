import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from "react-router-dom"
export function TemplatePreview({ wap, setWapToEditor }) {
  const [hoverState, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hoverState);
  }
  return (
    <div className="template-preview">
      <div className="template-preview-header">
        <MoreHorizIcon fontSize="large" style={{ color: "white" }} />
        <p className="template-preview-header-text">{wap.name}</p>
      </div>

      <div className="template-preview-img" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img
          className="template-img"
          onClick={() => setWapToEditor(wap)}
          alt=""
          src={wap.imgUrl}
        ></img>
        <div className={`template-preview-cover ${hoverState ? 'in-view' : 'out-view'}`} >
          <div className="template-preview-choose">
            <ArrowRightAltIcon className="icon-arrow" style={{ fontSize: "50px" }} onClick={() => setWapToEditor(wap)} />
            <h2 onClick={() => setWapToEditor(wap)}>
              Edit
                </h2>
            <div className="template-preview-preview flex align-center">
              <Link className="decoration-none" style={{ color: "#fff" }} to={`/preview/${wap._id}`}>
                <VisibilityIcon className="mr-1" /> Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
