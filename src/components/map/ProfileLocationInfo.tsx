import {MapPin} from "lucide-react";
import React from "react";
import {Profile} from "../../types";

interface ProfileLocationInfoProps {
  profile: Profile;
}

export const ProfileLocationInfo: React.FC<ProfileLocationInfoProps> = ({
  profile,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            <p>{profile.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
