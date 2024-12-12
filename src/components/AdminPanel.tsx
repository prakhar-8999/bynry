import {message} from "antd";
import {Plus} from "lucide-react";
import React, {useState} from "react";
import useProfileStore from "../store/profileStore";
import {Profile} from "../types";
import {ProfileForm} from "./admin/ProfileForm";
import {ProfileList} from "./admin/ProfileList";

export const AdminPanel: React.FC = () => {
  const {profiles, addProfile, updateProfile, deleteProfile} =
    useProfileStore();
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<Partial<Profile>>({});

  const handleSubmit = (profile: Profile) => {
    if (currentProfile.id) {
      updateProfile(currentProfile.id, profile);
      message.success("Profile updated successfully!");
    } else {
      addProfile({
        ...profile,
        id: Date.now().toString(),
      });
      message.success("Profile added successfully!");
    }
    setCurrentProfile({});
    setIsEditing(false);
  };

  const handleEdit = (profile: Profile) => {
    setCurrentProfile(profile);
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button
          onClick={() => {
            setCurrentProfile({});
            setIsEditing(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Plus size={20} />
          Add Profile
        </button>
      </div>

      {isEditing ? (
        <ProfileForm
          profile={currentProfile}
          onSubmit={handleSubmit}
          onCancel={() => {
            setCurrentProfile({});
            setIsEditing(false);
          }}
        />
      ) : (
        <ProfileList
          profiles={profiles}
          onEdit={handleEdit}
          onDelete={deleteProfile}
        />
      )}
    </div>
  );
};
