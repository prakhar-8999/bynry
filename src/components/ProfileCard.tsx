import {Mail, MapPin, Tag} from "lucide-react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Profile} from "../types";

interface ProfileCardProps {
  profile: Profile;
  onShowSummary: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onShowSummary,
}) => {
  const navigate = useNavigate();

  const handleShowOnMap = () => {
    onShowSummary(profile);
    navigate("/map");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center mb-2">{profile.name}</h3>
      <p className="text-gray-600 mb-4">{profile.description}</p>

      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <MapPin size={16} />
        <span>{profile.address}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <Mail size={16} />
        <span>{profile.contact}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {profile.interests.map((interest, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center gap-1"
          >
            <Tag size={12} />
            {interest}
          </span>
        ))}
      </div>

      <button
        onClick={handleShowOnMap}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Show on Map
      </button>
    </div>
  );
};
