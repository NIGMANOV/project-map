import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Импорт модуля Pagination
import "swiper/css";
import "swiper/css/pagination"; // Стили для пагинации

import "./Map.scss";

const apiKey = import.meta.env.VITE_API_KEY;

const center = { lat: 36.170069, lng: 27.976643 };

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#eaeaea" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#3c3c3c" }] },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#a4cbe3" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#eaeaea" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#c5e1a5" }],
  },
]; // Стилизация карты

const markers = [
  {
    id: 1,
    lat: 36.214841,
    lng: 28.115609,
    title: "Castle of Asklipio",
    description:
      "Asklipio Castle, known as one of the island's more remarkable castle ruins.",
    images: [
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
      "https://president.uz/uploads/4bba7417-4549-f39f-609c-7c4ca419693d.jpg",
      "https://sitara.com/upload/iblock/8eb/8eb3de6a27f05f7683d2f6b245e56f0d.jpeg",
      "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6629101bb062a563bd66a96c_6629f2f60c01f3734e59ab84/scale_1200",
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
        disableDefaultUI: true, // Полностью отключает интерфейс
        mapTypeControl: false, // Убирает кнопки "Спутник", "Карта"
        fullscreenControl: false, // Убирает кнопку полноэкранного режима
        streetViewControl: false, // Убирает "Просмотр улиц"
        gestureHandling: "greedy", // Позволяет двигать карту одним пальцем, убирает надпись
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
      render={(status) => (
        <p>{status === Status.LOADING ? "Загрузка..." : "Ошибка"}</p>
      )}
    >
      <MapComponent onMapLoad={handleMapLoad} />

      {selectedMarker && (
        <div
          className={`card ${isHalfOpen ? "half-open" : ""} ${
            isFullOpen ? "full-open" : ""
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="card-content">
            <div className="container">
              {/* <button className="close-btn" onClick={handleClose}>
              ×
            </button> */}
              <div className="dd">
                <div className="line"></div>
              </div>
              <div className="card-title">
                <p>{selectedMarker.title}</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2308_465)">
                    <path
                      d="M30.0005 25.9998V28.9998C30.0005 29.5518 29.5535 29.9998 29.0005 29.9998H3.00049C2.44749 29.9998 2.00049 29.5518 2.00049 28.9998V25.9998C2.00049 25.4478 2.44749 24.9998 3.00049 24.9998H6.00049V14.9998H10.0005V24.9998H14.0005V14.9998H18.0005V24.9998H22.0005V14.9998H26.0005V24.9998H29.0005C29.5535 24.9998 30.0005 25.4478 30.0005 25.9998Z"
                      fill="#A70003"
                    />
                    <path
                      d="M29.4195 8.09211L16.4195 2.09211C16.1535 1.97011 15.8475 1.97011 15.5815 2.09211L2.58149 8.09211C2.22749 8.25511 2.00049 8.61011 2.00049 9.00011V12.0001C2.00049 12.5521 2.44749 13.0001 3.00049 13.0001H29.0005C29.5535 13.0001 30.0005 12.5521 30.0005 12.0001V9.00011C30.0005 8.61011 29.7735 8.25511 29.4195 8.09211ZM16.0005 11.0001C14.3435 11.0001 13.0005 9.65711 13.0005 8.00011C13.0005 6.34311 14.3435 5.00011 16.0005 5.00011C17.6575 5.00011 19.0005 6.34311 19.0005 8.00011C19.0005 9.65711 17.6575 11.0001 16.0005 11.0001Z"
                      fill="#A70003"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2308_465">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="card-description">
                <p>{selectedMarker.description}</p>
              </div>
              {/* <div className="card-btn">
                <button>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41659 0.375C4.16575 0.375 0.708252 3.8325 0.708252 8.08333C0.708252 9.79 1.27909 11.4517 2.32242 12.7983L1.55992 15.8483C1.50159 16.08 1.58075 16.3242 1.76409 16.4783C1.87909 16.5742 2.02159 16.625 2.16575 16.625C2.25159 16.625 2.33825 16.6075 2.41992 16.5717L5.48659 15.2083C6.42409 15.5958 7.40825 15.7917 8.41659 15.7917C12.6674 15.7917 16.1249 12.3342 16.1249 8.08333C16.1249 3.8325 12.6674 0.375 8.41659 0.375ZM5.08325 9.125C4.50909 9.125 4.04159 8.6575 4.04159 8.08333C4.04159 7.50917 4.50909 7.04167 5.08325 7.04167C5.65742 7.04167 6.12492 7.50917 6.12492 8.08333C6.12492 8.6575 5.65742 9.125 5.08325 9.125ZM8.41659 9.125C7.84242 9.125 7.37492 8.6575 7.37492 8.08333C7.37492 7.50917 7.84242 7.04167 8.41659 7.04167C8.99075 7.04167 9.45825 7.50917 9.45825 8.08333C9.45825 8.6575 8.99075 9.125 8.41659 9.125ZM11.7499 9.125C11.1758 9.125 10.7083 8.6575 10.7083 8.08333C10.7083 7.50917 11.1758 7.04167 11.7499 7.04167C12.3241 7.04167 12.7916 7.50917 12.7916 8.08333C12.7916 8.6575 12.3241 9.125 11.7499 9.125Z"
                      fill="white"
                    />
                  </svg>

                  <p>Ask AI</p>
                </button>
                <button>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41659 0.375C4.16575 0.375 0.708252 3.8325 0.708252 8.08333C0.708252 9.79 1.27909 11.4517 2.32242 12.7983L1.55992 15.8483C1.50159 16.08 1.58075 16.3242 1.76409 16.4783C1.87909 16.5742 2.02159 16.625 2.16575 16.625C2.25159 16.625 2.33825 16.6075 2.41992 16.5717L5.48659 15.2083C6.42409 15.5958 7.40825 15.7917 8.41659 15.7917C12.6674 15.7917 16.1249 12.3342 16.1249 8.08333C16.1249 3.8325 12.6674 0.375 8.41659 0.375ZM5.08325 9.125C4.50909 9.125 4.04159 8.6575 4.04159 8.08333C4.04159 7.50917 4.50909 7.04167 5.08325 7.04167C5.65742 7.04167 6.12492 7.50917 6.12492 8.08333C6.12492 8.6575 5.65742 9.125 5.08325 9.125ZM8.41659 9.125C7.84242 9.125 7.37492 8.6575 7.37492 8.08333C7.37492 7.50917 7.84242 7.04167 8.41659 7.04167C8.99075 7.04167 9.45825 7.50917 9.45825 8.08333C9.45825 8.6575 8.99075 9.125 8.41659 9.125ZM11.7499 9.125C11.1758 9.125 10.7083 8.6575 10.7083 8.08333C10.7083 7.50917 11.1758 7.04167 11.7499 7.04167C12.3241 7.04167 12.7916 7.50917 12.7916 8.08333C12.7916 8.6575 12.3241 9.125 11.7499 9.125Z"
                      fill="white"
                    />
                  </svg>

                  <p>Ask AI</p>
                </button>
                <button>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41659 0.375C4.16575 0.375 0.708252 3.8325 0.708252 8.08333C0.708252 9.79 1.27909 11.4517 2.32242 12.7983L1.55992 15.8483C1.50159 16.08 1.58075 16.3242 1.76409 16.4783C1.87909 16.5742 2.02159 16.625 2.16575 16.625C2.25159 16.625 2.33825 16.6075 2.41992 16.5717L5.48659 15.2083C6.42409 15.5958 7.40825 15.7917 8.41659 15.7917C12.6674 15.7917 16.1249 12.3342 16.1249 8.08333C16.1249 3.8325 12.6674 0.375 8.41659 0.375ZM5.08325 9.125C4.50909 9.125 4.04159 8.6575 4.04159 8.08333C4.04159 7.50917 4.50909 7.04167 5.08325 7.04167C5.65742 7.04167 6.12492 7.50917 6.12492 8.08333C6.12492 8.6575 5.65742 9.125 5.08325 9.125ZM8.41659 9.125C7.84242 9.125 7.37492 8.6575 7.37492 8.08333C7.37492 7.50917 7.84242 7.04167 8.41659 7.04167C8.99075 7.04167 9.45825 7.50917 9.45825 8.08333C9.45825 8.6575 8.99075 9.125 8.41659 9.125ZM11.7499 9.125C11.1758 9.125 10.7083 8.6575 10.7083 8.08333C10.7083 7.50917 11.1758 7.04167 11.7499 7.04167C12.3241 7.04167 12.7916 7.50917 12.7916 8.08333C12.7916 8.6575 12.3241 9.125 11.7499 9.125Z"
                      fill="white"
                    />
                  </svg>

                  <p>Ask AI</p>
                </button>
                <button>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41659 0.375C4.16575 0.375 0.708252 3.8325 0.708252 8.08333C0.708252 9.79 1.27909 11.4517 2.32242 12.7983L1.55992 15.8483C1.50159 16.08 1.58075 16.3242 1.76409 16.4783C1.87909 16.5742 2.02159 16.625 2.16575 16.625C2.25159 16.625 2.33825 16.6075 2.41992 16.5717L5.48659 15.2083C6.42409 15.5958 7.40825 15.7917 8.41659 15.7917C12.6674 15.7917 16.1249 12.3342 16.1249 8.08333C16.1249 3.8325 12.6674 0.375 8.41659 0.375ZM5.08325 9.125C4.50909 9.125 4.04159 8.6575 4.04159 8.08333C4.04159 7.50917 4.50909 7.04167 5.08325 7.04167C5.65742 7.04167 6.12492 7.50917 6.12492 8.08333C6.12492 8.6575 5.65742 9.125 5.08325 9.125ZM8.41659 9.125C7.84242 9.125 7.37492 8.6575 7.37492 8.08333C7.37492 7.50917 7.84242 7.04167 8.41659 7.04167C8.99075 7.04167 9.45825 7.50917 9.45825 8.08333C9.45825 8.6575 8.99075 9.125 8.41659 9.125ZM11.7499 9.125C11.1758 9.125 10.7083 8.6575 10.7083 8.08333C10.7083 7.50917 11.1758 7.04167 11.7499 7.04167C12.3241 7.04167 12.7916 7.50917 12.7916 8.08333C12.7916 8.6575 12.3241 9.125 11.7499 9.125Z"
                      fill="white"
                    />
                  </svg>

                  <p>Ask AI</p>
                </button>
              </div> */}
              {/* <div className="images">
                {selectedMarker.images.map((img, index) => (
                  <img key={index} src={img} alt={`img-${index}`} />
                ))}
              </div> */}

              <Swiper
                pagination={{ el: ".custom-pagination", clickable: true }}
                modules={[Pagination]}
                className="custom-swiper"
              >
                {selectedMarker.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      className="slide-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Отдельный блок для пагинации */}
              <div className="custom-pagination"></div>

            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Map;
