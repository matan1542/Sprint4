/* eslint-disable default-case */
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
function _GoogleMap({ cmp, onCmpFocus, onDeleteCmp,google }) {
  const pos = {
    lat: cmp.info.lat,
    lng: cmp.info.lng,
  };
  return (
    <div className="wap-el" onClick={(ev) => onCmpFocus(ev, cmp)}>
      <Map
        google={google}
        zoom={10}
        initialCenter={{
          lat: 32.109333,
          lng: 34.855499,
        }}
        disableDefaultUI={true}
        center={pos}
        style={{
          ...cmp.info.style,
        }}
        containerStyle={
         { ...cmp.info.style}
        }
      >
        <Marker position={pos} name={"branch location"} />
      </Map>
      <div className="wap-section-tool">
        <button
          className="wap-el-btn-edit"
          onClick={(ev) => onCmpFocus(ev, cmp)}
        >
          <EditOutlinedIcon />
        </button>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export const WapMap = GoogleApiWrapper({
  apiKey: "AIzaSyDu60DBoSBmTbdyFbq4kBMadZFAhdfJJxs",
})(_GoogleMap);
