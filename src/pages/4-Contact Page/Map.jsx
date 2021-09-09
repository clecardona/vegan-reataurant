import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

export default function Map({ localisation }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDM7qJpVBt4kzLZ5vlz5qrOEAl2M-CH3hU" }}
        defaultCenter={localisation}
        defaultZoom={15}
      >
        <MapMarker
          lat={localisation.lat}
          lng={localisation.lng}
          text="Wild and the Moon"
        />
      </GoogleMapReact>
    </div>
  );
}
