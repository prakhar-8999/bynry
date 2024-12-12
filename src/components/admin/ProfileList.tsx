import {Edit2, Trash2} from "lucide-react";
import React from "react";
import {Profile} from "../../types";

interface ProfileListProps {
  profiles: Profile[];
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
}

export const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between p-4 border rounded-md"
        >
          <div>
            <h3 className="font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{profile.address}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(profile)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
            >
              <Edit2 size={20} />
            </button>
            <button
              onClick={() => onDelete(profile.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-md"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
