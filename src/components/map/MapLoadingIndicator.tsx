import {Loader2} from "lucide-react";
import React from "react";

export const MapLoadingIndicator: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
      <div className="flex items-center space-x-2">
        <Loader2 className="animate-spin" size={24} />
        <span>Loading map...</span>
      </div>
    </div>
  );
};
