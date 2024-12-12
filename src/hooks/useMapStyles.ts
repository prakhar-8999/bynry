import { useMemo } from 'react';

export const useMapStyles = () => {
  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const mapOptions = useMemo(() => ({
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  }), []);

  return { containerStyle, mapOptions };
};