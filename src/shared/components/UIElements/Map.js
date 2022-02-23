import React from 'react';

import './Map.css';

const Map = (props) => {
  // const mapRef = useRef();

  // const { center, zoom } = props;

  // useEffect(() => {
  //   const map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom,
  //   });

  //   new window.google.maps.Marker({ position: center, map: map });
  // }, [center, zoom]);

  return (
    <React.Fragment>
      <iframe
        title="map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={
          'https://maps.google.com/maps?q=' +
          props.coordinates.lat.toString() +
          ',' +
          props.coordinates.lng.toString() +
          '&t=&z=15&ie=UTF8&iwloc=&output=embed'
        }
      ></iframe>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
      ></script>
    </React.Fragment>
    // <div
    //   ref={mapRef}
    //   className={`map ${props.className}`}
    //   style={props.style}
    // ></div>
  );
};

export default Map;
