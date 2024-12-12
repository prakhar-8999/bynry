import {message} from "antd";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Profile} from "../../types";
import {MapComponent} from "./GoogleMap";
import {ProfileLocationInfo} from "./ProfileLocationInfo";

interface MapViewProps {
  profile: Profile | null;
}

export const MapView: React.FC<MapViewProps> = ({profile}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) {
      navigate("/");
      message.error("User not found!!");
    }
  }, [profile, navigate]);

  if (!profile) {
    return null;
  }

  return (
    <div className="space-y-6">
      <MapComponent profile={profile} />
      <ProfileLocationInfo profile={profile} />
    </div>
  );
};
