import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(18.526551794097287);
  const [lng, setLng] = useState(73.84751349320722);

  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/sanket00900/clkpqbgr3007301o8faxo8s38",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="max-h-screen">
      <div className="bg-blue-400 bg-opacity-90 text-white p-3 font-bold z-10 absolute top-24 left-32 m-4 rounded-md">
        Longitude: {lng} <br /> Latitude: {lat} <br /> Zoom: {zoom}
      </div>
      <div
        ref={mapContainer}
        className="h-144 w-300 flex justify-center items-center rounded-md my-4 mx-auto"
      />
    </div>
  );
};

export default Map;
