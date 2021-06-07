/* eslint-disable default-case */
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
function _GoogleMap({ cmp, onCmpFocus, onDeleteCmp, google }) {
  const pos = {
    lat: cmp.info.lat,
    lng: cmp.info.lng,
  };
  return (
    <div className="wap-section wap-section" style={{ ...cmp.info.style, zIndex: "4" }} onClick={(ev) => onCmpFocus(ev, cmp)}>
      <div className="wap-section-tool" style={{ width: "30px" }}>
        <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
      <Map
        className="wap-map-container"
        google={google}
        zoom={16}
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
          { ...cmp.info.style }
        }
      >
        <Marker position={pos} name={"branch location"} />
      </Map>

    </div>
  );
}

export const WapMap = GoogleApiWrapper({
  apiKey: "AIzaSyDu60DBoSBmTbdyFbq4kBMadZFAhdfJJxs",
})(_GoogleMap);
