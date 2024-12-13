import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import React, {useEffect, useState} from "react";
import {useMapStyles} from "../../hooks/useMapStyles";
import {Profile} from "../../types";
import {MapLoadingIndicator} from "./MapLoadingIndicator";

interface MapComponentProps {
  profile: Profile | null;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_MAP_API_KEY;

export const MapComponent: React.FC<MapComponentProps> = ({profile}) => {
  const {containerStyle, mapOptions} = useMapStyles();
  const [center, setCenter] = useState({lat: 37.7749, lng: -122.4194}); // Default to San Francisco

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (profile && profile.coordinates && profile.coordinates.length === 2) {
      setCenter({
        lat: profile.coordinates[1],
        lng: profile.coordinates[0],
      });
    }
  }, [profile]);

  if (loadError) {
    return (
      <p>
        Error loading maps. Please check your API key or network connection.
      </p>
    );
  }

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
      {!isLoaded ? (
        <MapLoadingIndicator />
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={mapOptions}
        >
          {profile && profile.coordinates.length > 0 ? (
            <Marker
              position={{
                lat: profile.coordinates[1],
                lng: profile.coordinates[0],
              }}
              title={profile.name || "Center Marker"}
            />
          ) : (
            <Marker position={center} title="Marker" />
          )}
        </GoogleMap>
      )}
    </div>
  );
};
