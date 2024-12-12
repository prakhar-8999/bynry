export interface Profile {
  id: string;
  name: string;
  photo: string;
  description: string;
  address: string;
  coordinates: [number, number];
  contact: string;
  interests: string[];
}

export interface MapViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}