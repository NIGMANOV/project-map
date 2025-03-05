import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Импорт модуля Pagination
import "swiper/css";
import "swiper/css/pagination"; // Стили для пагинации
import Image from "../../assets/image.png";
import "./Map.scss";

const apiKey = import.meta.env.VITE_API_KEY; // google maps api key

const center = { lat: 36.170069, lng: 27.976643 }; // координаты острова

// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#eaeaea" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#A2A4AB" }] },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ color: "#C7D5F9" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#ffffff" }],
//   },
//   {
//     featureType: "landscape",
//     elementType: "geometry",
//     stylers: [{ color: "#DEEEE1" }],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [{ color: "#F7F3EA" }],
//   },
// ]; // Стилизация карты

const darkMapStyle = [
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#A2A4AB" }] },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      { color: "#688CE6" }, // Цвет текста (синий)
      { visibility: "on" }, // Обязательно включаем видимость
    ],
  },
  {
    featureType: "water", // Вода
    elementType: "geometry",
    stylers: [{ color: "#C7D5F9" }],
  },
  {
    featureType: "road", // Все дороги
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
];

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
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
      "https://img.tourister.ru/files/2/1/4/7/8/3/2/0/original.jpg",
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
]; // fake Markers

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
}; // Стилизация компонентов

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
        console.log(marker.getPosition());
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

  const handleCollapse = () => {
    if (isFullOpen) {
      setIsFullOpen(false);
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
          <div className={`card-content ${isFullOpen ? "full-open" : ""}`}>
            <div className="container">
              {!isFullOpen && (
                <div className="card-line">
                  <div className="line"></div>
                </div>
              )}
              <div className="card-title">
                <div className="btn-title">
                  {isFullOpen && (
                    <button className="collapse-btn" onClick={handleCollapse}>
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.82175 15.6266L0.620778 9.48692C0.205792 9.07772 5.80429e-07 8.53886 6.04057e-07 7.99832C6.27685e-07 7.45777 0.205792 6.91891 0.620778 6.50971L6.82175 0.370047C7.32007 -0.123349 8.12794 -0.123349 8.62626 0.370047C9.12458 0.863443 9.12458 1.66332 8.62626 2.15671L2.72462 8L8.62626 13.8433C9.12458 14.3367 9.12458 15.1366 8.62626 15.63C8.12793 16.1233 7.32007 16.1233 6.82175 15.63L6.82175 15.6266Z"
                          fill="#00152A"
                        />
                      </svg>
                    </button>
                  )}
                  <p>{selectedMarker.title}</p>
                </div>
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
            </div>

            <div className="card-scrollbtn">
              <button className="card-scrollbtn__btn">
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
                Ask AI
              </button>
              <button className="card-scrollbtn__btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5791 0.920787C14.035 0.378287 13.2091 0.24412 12.54 0.57912L1.20163 5.83162C0.73496 6.06495 0.40746 6.51162 0.323293 7.02662C0.23996 7.54079 0.40996 8.06829 0.77996 8.43662C0.989126 8.64579 1.24996 8.79329 1.53496 8.86412L5.00829 9.73245C5.38246 9.82579 5.67413 10.1175 5.76746 10.4908L6.63579 13.9641C6.70663 14.2508 6.85496 14.5116 7.06413 14.7208C7.37079 15.0275 7.78746 15.1966 8.21579 15.1966C8.30246 15.1966 8.38829 15.19 8.47496 15.1758C8.98996 15.0925 9.43579 14.7641 9.67663 14.2816L14.9125 2.97745C15.2558 2.28995 15.1216 1.46329 14.5791 0.920787Z"
                    fill="white"
                  />
                </svg>
                Directions
              </button>
              <button className="card-scrollbtn__btn">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1343 1.70395C12.186 1.75455 13.1346 2.21444 13.8294 3.01383L13.8939 3.09193C15.0973 4.54893 14.9787 6.85539 13.5144 8.31967L8.9111 12.923C8.66009 13.174 8.33136 13.3001 7.99821 13.3001C7.66505 13.3001 7.33632 13.174 7.08531 12.923L2.48198 8.31967C1.01748 6.85517 0.898561 4.54885 2.10238 3.09213L2.10277 3.09166C2.80282 2.2435 3.77814 1.75552 4.86315 1.70399L4.86607 1.70384C5.7774 1.65788 6.6693 1.9479 7.38464 2.50494L7.99904 2.98337L8.61343 2.50494C9.32851 1.9481 10.2245 1.6579 11.1318 1.70383L11.1343 1.70395Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                Save
              </button>
              <button className="card-scrollbtn__btn">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86217 4.52712C4.60172 4.26668 4.60172 3.84448 4.86217 3.58405L7.52883 0.917493C7.78928 0.65706 8.2115 0.65706 8.47195 0.917493L11.1386 3.58405C11.3991 3.84448 11.3991 4.26668 11.1386 4.52712C11.0088 4.65689 10.8382 4.72266 10.6675 4.72266C10.4968 4.72266 10.3262 4.65778 10.1964 4.52712L8.6675 2.99829V11.1659C8.6675 11.5339 8.36884 11.8326 8.00083 11.8326C7.63283 11.8326 7.33417 11.5339 7.33417 11.1659V2.99918L5.80528 4.52801C5.54483 4.78844 5.12261 4.78755 4.86217 4.52712ZM15.1111 10.5002C14.7431 10.5002 14.4444 10.7988 14.4444 11.1668V13.8334C14.4444 14.4458 13.9457 14.9444 13.3333 14.9444H2.66661C2.05417 14.9444 1.5555 14.4458 1.5555 13.8334V11.1668C1.5555 10.7988 1.25683 10.5002 0.888835 10.5002C0.520835 10.5002 0.222168 10.7988 0.222168 11.1668V13.8334C0.222168 15.1818 1.31817 16.2777 2.66661 16.2777H13.3333C14.6817 16.2777 15.7777 15.1818 15.7777 13.8334V11.1668C15.7777 10.7988 15.4791 10.5002 15.1111 10.5002Z"
                    fill="white"
                  />
                </svg>
                Share
              </button>
            </div>

            <div className="card-swiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
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
              <div className="custom-pagination"></div>
            </div>

            <div className="container">
              <div className="card-description">
                <p className="card-description__p">
                  One of the longest and most beautiful beaches on the island of
                  Rhodes,{" "}
                  <a href="" className="card-description__link">
                    scretching
                  </a>{" "}
                  for about 4 kilometers along the eastern coast.
                </p>
                <p className="card-description__title">Historic Landmarks</p>
                <p>
                  The name “Afandou” means “invisible” in Greek, as the village
                  was originally built inland to protect it from pirate raids.
                  Today, the beach is easily accessible and has become a popular
                  destination for both locals and tourists.
                </p>
              </div>

              <div className="card-image">
                <img className="card-image__image" src={Image} alt="" />
                <p className="card-image__p">Image 143</p>
              </div>

              <div className="card-subtitle">
                <p className="card-subtitle__p">
                  One of the longest and most beautiful beaches on the island of
                  Rhodes, stretching for about 4 kilometers along the eastern
                  coast. The name “Afandou” means “invisible” in Greek, as the
                  village was originally built inland to protect it from pirate
                  raids. Today, the beach is easily accessible and has become a
                  popular destination for both locals and tourists.
                </p>
                <ul className="card-subtitle__ul">
                  <li className="card-subtitle__li">village was originally </li>
                  <li className="card-subtitle__li">built inland to protect</li>
                  <li className="card-subtitle__li">it from pirate raids</li>
                </ul>
                <p className="card-subtitle__p">
                  “Afandou” means “invisible” in Greek, as the village was
                  originally built inland to protect it from pirate raids.
                  Today, the beach is easily accessible and has become a popular
                  destination for both locals and tourists.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Map;
