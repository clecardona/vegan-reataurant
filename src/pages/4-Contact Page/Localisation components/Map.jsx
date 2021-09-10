import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

export default function Map({ coordinates }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDM7qJpVBt4kzLZ5vlz5qrOEAl2M-CH3hU" }}
        defaultCenter={coordinates}
        defaultZoom={15}
      >
        <MapMarker
          lat={coordinates.lat}
          lng={coordinates.lng}
          text="Wild and the Moon"
        />
      </GoogleMapReact>
    </div>
  );
}
