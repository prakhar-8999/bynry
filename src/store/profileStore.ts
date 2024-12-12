import {create} from "zustand";
import {persist} from "zustand/middleware";
import {Profile} from "../types";

interface ProfileState {
  profiles: Profile[];
  selectedProfile: Profile | null;
  searchQuery: string;
  setProfiles: (profiles: Profile[]) => void;
  addProfile: (profile: Profile) => void;
  updateProfile: (id: string, profile: Profile) => void;
  deleteProfile: (id: string) => void;
  setSelectedProfile: (profile: Profile | null) => void;
  setSearchQuery: (query: string) => void;
}

const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profiles: [
        {
          id: "1",
          name: "John Doe",
          photo:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
          description: "Software Engineer passionate about web development",
          address: "San Francisco, CA",
          coordinates: [-122.4194, 37.7749],
          contact: "john@bynry.com",
          interests: ["Programming", "Hiking", "Photography"],
        },
        {
          id: "2",
          name: "Jane Smith",
          photo:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
          description: "UX Designer creating beautiful user experiences",
          address: "New York, NY",
          coordinates: [-74.006, 40.7128],
          contact: "jane@bynry.com",
          interests: ["Design", "Art", "Travel"],
        },
      ],
      selectedProfile: null,
      searchQuery: "",
      setProfiles: (profiles) => set({profiles}),
      addProfile: (profile) =>
        set((state) => ({profiles: [...state.profiles, profile]})),
      updateProfile: (id, profile) =>
        set((state) => ({
          profiles: state.profiles.map((p) => (p.id === id ? profile : p)),
        })),
      deleteProfile: (id) =>
        set((state) => ({
          profiles: state.profiles.filter((p) => p.id !== id),
        })),
      setSelectedProfile: (profile) => set({selectedProfile: profile}),
      setSearchQuery: (query) => set({searchQuery: query}),
    }),
    {
      name: "profile-storage",
    }
  )
);

export default useProfileStore;
