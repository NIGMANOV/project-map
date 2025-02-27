import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import "./Map.scss";

const apiKey = import.meta.env.VITE_API_KEY

const center = { lat: 36.170069, lng: 27.976643 };

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#eaeaea" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#3c3c3c" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#a4cbe3" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#eaeaea" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#c5e1a5" }] },
];

const markers = [
  {
    id: 1,
    lat: 36.214841,
    lng: 28.115609,
    title: "Парк Алишера Навои",
    description: "Красивый парк в центре Ташкента.",
    images: [
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
      "https://president.uz/uploads/4bba7417-4549-f39f-609c-7c4ca419693d.jpg",
    ],
  },
  {
    id: 2,
    lat: 36.252827,
    lng: 28.160918,
    title: "Башня Ташкент",
    description: "Телебашня высотой 375 метров.",
    images: [
      "https://sitara.com/upload/iblock/8eb/8eb3de6a27f05f7683d2f6b245e56f0d.jpeg",
      "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6629101bb062a563bd66a96c_6629f2f60c01f3734e59ab84/scale_1200",
    ],
  },
];

const MapComponent = ({ onMapLoad }) => {
  const ref = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom: 10,
        styles: darkMapStyle,
      });
      setMap(newMap);
      onMapLoad(newMap);
    }
  }, [map, onMapLoad]);

  return <div ref={ref} style={{ width: "100%", height: "100vh" }} />;
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isHalfOpen, setIsHalfOpen] = useState(false);
  const [isFullOpen, setIsFullOpen] = useState(false);
  const startY = useRef(0);

  const handleMapLoad = (map) => {
    markers.forEach((markerData) => {
      const marker = new window.google.maps.Marker({
        position: { lat: markerData.lat, lng: markerData.lng },
        map,
        title: markerData.title,
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener("click", () => {
        setSelectedMarker(markerData);
        setIsHalfOpen(true);
        setIsFullOpen(false);
        map.setCenter(marker.getPosition());
        map.setZoom(12);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 750);
      });
    });
  };

  const handleClose = () => {
    setIsHalfOpen(false);
    setIsFullOpen(false);
    setSelectedMarker(null);
  };

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    let endY = e.changedTouches[0].clientY;
    let diff = startY.current - endY;

    if (diff > 50) {
      if (isHalfOpen && !isFullOpen) setIsFullOpen(true);
    } else if (diff < -50) {
      if (isFullOpen) setIsFullOpen(false);
      else if (isHalfOpen) handleClose();
    }
  };

  return (
    <Wrapper
      apiKey={apiKey}
      render={(status) => <p>{status === Status.LOADING ? "Загрузка..." : "Ошибка"}</p>}
    >
      <MapComponent onMapLoad={handleMapLoad} />

      {selectedMarker && (
        <div
          className={`card ${isHalfOpen ? "half-open" : ""} ${isFullOpen ? "full-open" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="card-content">
            <button className="close-btn" onClick={handleClose}>×</button>
            <h3>{selectedMarker.title}</h3>
            <p>{selectedMarker.description}</p>
            <div className="images">
              {selectedMarker.images.map((img, index) => (
                <img key={index} src={img} alt={`img-${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Map;

