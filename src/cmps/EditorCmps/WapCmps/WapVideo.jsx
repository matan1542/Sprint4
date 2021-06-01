import React from "react";
import ReactPlayer from "react-player/youtube";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function WapVideo({onCmpFocus,onDeleteCmp,cmp}) {
  return (
    <div className="player-wrapper" style={{...cmp.info.style}}>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      />
      <div className="wap-section-tool" style={{right:"100px"}}>
        <button className="wap-el-btn-edit" onClick={(ev) => onCmpFocus(ev,cmp)}>
          <EditOutlinedIcon />
        </button>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
