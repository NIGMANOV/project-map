import React, { useEffect, useState } from "react";
import "./Search.scss";

const data = [
  {
    id: 1,
    title: "Historic",
    icon: "",
  },
  {
    id: 2,
    title: "Natural Sites",
    icon: "",
  },
  {
    id: 3,
    title: "Food & Shops",
    icon: "",
  },
];

const Search = () => {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState([]);
  const [listView, setListView] = useState(false);

  const changeCategory = (id) => {
    if (theme.length > 0 && theme.includes(id)) {
      setTheme(theme.filter((item) => item !== id));
    } else {
      setTheme([...theme, id]);
    }
  };

  return (
    <>
      <div className={theme.length > 0 ? "main main--active" : "main"}>
        <div className="container">
          <div className="inputs">
            {!value && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.53 18.47L14.836 13.776C16.03 12.345 16.75 10.506 16.75 8.50098C16.75 3.95198 13.049 0.250977 8.5 0.250977C3.951 0.250977 0.25 3.95098 0.25 8.49998C0.25 13.049 3.951 16.75 8.5 16.75C10.505 16.75 12.344 16.03 13.775 14.836L18.469 19.53C18.615 19.676 18.807 19.75 18.999 19.75C19.191 19.75 19.383 19.677 19.529 19.53C19.822 19.237 19.822 18.762 19.529 18.469L19.53 18.47ZM1.75 8.49998C1.75 4.77798 4.778 1.74998 8.5 1.74998C12.222 1.74998 15.25 4.77798 15.25 8.49998C15.25 10.358 14.495 12.044 13.275 13.266C13.273 13.268 13.271 13.268 13.269 13.27C13.267 13.272 13.267 13.274 13.265 13.276C12.043 14.495 10.358 15.251 8.499 15.251C4.777 15.251 1.749 12.223 1.749 8.50098L1.75 8.49998Z"
                  fill="#00152A"
                />
              </svg>
            )}

            <input
              type="text"
              placeholder="Search Location"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            {value && (
              <button className="btn-close" onClick={() => setValue("")}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2308_353)">
                    <path
                      d="M11.2379 10.0001L16.3934 4.84455C16.7352 4.50272 16.7352 3.94855 16.3934 3.60672C16.0515 3.26488 15.4974 3.26488 15.1556 3.60672L10.0001 8.76222L4.84455 3.60672C4.50272 3.26488 3.94855 3.26488 3.60672 3.60672C3.26488 3.94855 3.26488 4.50272 3.60672 4.84455L8.76222 10.0001L3.60672 15.1556C3.26488 15.4974 3.26488 16.0515 3.60672 16.3934C3.77705 16.5637 4.00105 16.6501 4.22505 16.6501C4.44905 16.6501 4.67305 16.5649 4.84338 16.3934L9.99888 11.2379L15.1544 16.3934C15.3247 16.5637 15.5487 16.6501 15.7727 16.6501C15.9967 16.6501 16.2207 16.5649 16.3911 16.3934C16.7329 16.0515 16.7329 15.4974 16.3911 15.1556L11.2355 10.0001H11.2379Z"
                      fill="#00152A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2308_353">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="scroll-nav">
          {data &&
            data.length > 0 &&
            data.map((category) => (
              <button
                key={category.id}
                className={
                  theme.length > 0 && theme.includes(category.id)
                    ? "btn-historic btn-historic--active"
                    : "btn-historic"
                }
                onClick={() => changeCategory(category.id)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7502 16.2499V18.1249C18.7502 18.4699 18.4709 18.7499 18.1252 18.7499H1.87524C1.52962 18.7499 1.25024 18.4699 1.25024 18.1249V16.2499C1.25024 15.9049 1.52962 15.6249 1.87524 15.6249H3.75024V9.37488H6.25024V15.6249H8.75024V9.37488H11.2502V15.6249H13.7502V9.37488H16.2502V15.6249H18.1252C18.4709 15.6249 18.7502 15.9049 18.7502 16.2499Z"
                    fill={
                      theme.length > 0 && theme.includes(category.id)
                        ? "#FFF"
                        : "#A70003"
                    }
                  />
                  <path
                    d="M18.3871 5.05755L10.2621 1.30755C10.0959 1.2313 9.90462 1.2313 9.73837 1.30755L1.61337 5.05755C1.39212 5.15943 1.25024 5.3813 1.25024 5.62505V7.50005C1.25024 7.84505 1.52962 8.12505 1.87524 8.12505H18.1252C18.4709 8.12505 18.7502 7.84505 18.7502 7.50005V5.62505C18.7502 5.3813 18.6084 5.15943 18.3871 5.05755ZM10.0002 6.87505C8.96462 6.87505 8.12524 6.03568 8.12524 5.00005C8.12524 3.96443 8.96462 3.12505 10.0002 3.12505C11.0359 3.12505 11.8752 3.96443 11.8752 5.00005C11.8752 6.03568 11.0359 6.87505 10.0002 6.87505Z"
                    fill={
                      theme.length > 0 && theme.includes(category.id)
                        ? "#FFF"
                        : "#A70003"
                    }
                  />
                </svg>
                {category.title}
              </button>
            ))}

          {/* <button
            className={
              btnCategoryHistoric
                ? "btn-historic btn-historic--active"
                : "btn-historic"
            }
            onClick={() => setbtnCategoryHistoric((prev) => !prev)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7502 16.2499V18.1249C18.7502 18.4699 18.4709 18.7499 18.1252 18.7499H1.87524C1.52962 18.7499 1.25024 18.4699 1.25024 18.1249V16.2499C1.25024 15.9049 1.52962 15.6249 1.87524 15.6249H3.75024V9.37488H6.25024V15.6249H8.75024V9.37488H11.2502V15.6249H13.7502V9.37488H16.2502V15.6249H18.1252C18.4709 15.6249 18.7502 15.9049 18.7502 16.2499Z"
                fill={btnCategoryHistoric ? "#FFF" : "#A70003"}
              />
              <path
                d="M18.3871 5.05755L10.2621 1.30755C10.0959 1.2313 9.90462 1.2313 9.73837 1.30755L1.61337 5.05755C1.39212 5.15943 1.25024 5.3813 1.25024 5.62505V7.50005C1.25024 7.84505 1.52962 8.12505 1.87524 8.12505H18.1252C18.4709 8.12505 18.7502 7.84505 18.7502 7.50005V5.62505C18.7502 5.3813 18.6084 5.15943 18.3871 5.05755ZM10.0002 6.87505C8.96462 6.87505 8.12524 6.03568 8.12524 5.00005C8.12524 3.96443 8.96462 3.12505 10.0002 3.12505C11.0359 3.12505 11.8752 3.96443 11.8752 5.00005C11.8752 6.03568 11.0359 6.87505 10.0002 6.87505Z"
                fill={btnCategoryHistoric ? "#FFF" : "#A70003"}
              />
            </svg>
            Historic
          </button>
          <button
            className={
              btnCategoryNatural
                ? "btn-natural btn-natural--active"
                : "btn-natural"
            }
            onClick={() => setbtnCategoryNatural((prev) => !prev)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2308_257)">
                <path
                  d="M10.6875 13.202V18.823C10.6875 19.0053 10.6151 19.1802 10.4862 19.3091C10.3572 19.438 10.1824 19.5105 10 19.5105C9.81769 19.5105 9.64282 19.438 9.51389 19.3091C9.38496 19.1802 9.31252 19.0053 9.31252 18.823V13.202C8.41467 13.3911 7.48396 13.3551 6.6034 13.0972C5.72283 12.8393 4.91977 12.3675 4.26582 11.7238C3.56548 11.0111 3.06841 10.1241 2.82606 9.15474C2.5837 8.18535 2.60489 7.1688 2.88742 6.21036C3.68266 5.98124 4.51844 5.92912 5.33598 6.05767C6.15352 6.18622 6.93298 6.49231 7.61953 6.95442C7.37774 6.3565 7.25232 5.71791 7.25002 5.07296C7.25825 4.13322 7.51755 3.21276 8.00106 2.40691C8.48457 1.60106 9.17471 0.939114 10 0.489624C10.8253 0.939114 11.5155 1.60106 11.999 2.40691C12.4825 3.21276 12.7418 4.13322 12.75 5.07296C12.7477 5.71791 12.6223 6.3565 12.3805 6.95442C13.0671 6.49231 13.8465 6.18622 14.6641 6.05767C15.4816 5.92912 16.3174 5.98124 17.1126 6.21036C17.3942 7.12812 17.4308 8.10358 17.2187 9.03984C17.0066 9.9761 16.5533 10.8406 15.9037 11.5474C15.2541 12.2543 14.4309 12.7789 13.5159 13.0691C12.6008 13.3594 11.6258 13.4052 10.6875 13.202Z"
                  fill={btnCategoryNatural ? "#FFF" : "#00A73D"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2308_257">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Natural Sites
          </button>
          <button
            className={
              btnCategoryFood ? "btn-food btn-food--active" : "btn-food"
            }
            onClick={() => setbtnCategoryFood((prev) => !prev)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2308_263)">
                <path
                  d="M2.08832 4.63924C4.30237 2.77334 7.10463 1.75 10.0001 1.75C12.8955 1.75 15.6978 2.77334 17.9118 4.63924C18.0868 4.78361 18.2027 4.98707 18.2379 5.21115C18.273 5.43523 18.2248 5.66442 18.1024 5.85538L17.4634 6.83282C17.338 7.02881 17.142 7.16907 16.9161 7.22457C16.6901 7.28006 16.4515 7.24653 16.2495 7.13092C14.3581 6.00881 12.1994 5.41666 10.0001 5.41666C7.80079 5.41666 5.64208 6.00881 3.75061 7.13092C3.54868 7.24653 3.31004 7.28006 3.08408 7.22457C2.85812 7.16907 2.66215 7.02881 2.53676 6.83282L1.89775 5.85538C1.77536 5.66442 1.72717 5.43523 1.76229 5.21115C1.7974 4.98707 1.91339 4.78361 2.08832 4.63924ZM9.20092 17.7384L4.38091 8.34697C4.40483 8.33386 4.43041 8.32671 4.45424 8.3126C6.13903 7.33456 8.05248 6.81942 10.0006 6.81942C11.9487 6.81942 13.8621 7.33456 15.5469 8.3126C15.5707 8.32671 15.5971 8.33093 15.6211 8.34413L10.7994 17.738C10.729 17.8908 10.6163 18.0202 10.4747 18.1109C10.333 18.2016 10.1684 18.2498 10.0002 18.2498C9.83197 18.2498 9.66729 18.2016 9.52565 18.1109C9.384 18.0202 9.27131 17.8912 9.20092 17.7384ZM10.9167 10C10.9167 10.1813 10.9705 10.3585 11.0712 10.5093C11.172 10.66 11.3151 10.7775 11.4826 10.8469C11.6501 10.9163 11.8344 10.9344 12.0122 10.8991C12.1901 10.8637 12.3534 10.7764 12.4816 10.6482C12.6098 10.52 12.6971 10.3566 12.7325 10.1788C12.7678 10.001 12.7497 9.8167 12.6803 9.6492C12.6109 9.4817 12.4934 9.33854 12.3427 9.23782C12.1919 9.13709 12.0147 9.08333 11.8334 9.08333C11.5903 9.08333 11.3571 9.17991 11.1852 9.35182C11.0133 9.52372 10.9167 9.75688 10.9167 10ZM9.08341 9.08333C9.08341 8.90203 9.02964 8.7248 8.92892 8.57406C8.8282 8.42331 8.68503 8.30582 8.51753 8.23644C8.35003 8.16706 8.16572 8.14891 7.98791 8.18428C7.81009 8.21965 7.64676 8.30695 7.51856 8.43515C7.39036 8.56335 7.30306 8.72668 7.26769 8.9045C7.23232 9.08231 7.25047 9.26662 7.31985 9.43412C7.38923 9.60162 7.50672 9.74479 7.65747 9.84551C7.80821 9.94624 7.98544 10 8.16674 10C8.40985 10 8.64301 9.90342 8.81492 9.73151C8.98683 9.5596 9.08341 9.32645 9.08341 9.08333ZM9.08341 13.6667C9.08341 13.848 9.13717 14.0252 9.23789 14.1759C9.33862 14.3267 9.48178 14.4442 9.64928 14.5136C9.81678 14.5829 10.0011 14.6011 10.1789 14.5657C10.3567 14.5303 10.5201 14.443 10.6483 14.3148C10.7765 14.1866 10.8638 14.0233 10.8991 13.8455C10.9345 13.6677 10.9163 13.4834 10.847 13.3159C10.7776 13.1484 10.6601 13.0052 10.5093 12.9045C10.3586 12.8038 10.1814 12.75 10.0001 12.75C9.75696 12.75 9.5238 12.8466 9.35189 13.0185C9.17998 13.1904 9.08341 13.4235 9.08341 13.6667Z"
                  fill={btnCategoryFood ? "#FFF" : "#D94F00"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2308_263">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Food & Shops
          </button> */}
        </div>
      </div>

      {theme.length > 0 && (
        <div className="all-card">
          <div className="last-wiew">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.04159 5.83337C6.04159 5.48837 6.32159 5.20837 6.66659 5.20837H15.8333C16.1783 5.20837 16.4583 5.48837 16.4583 5.83337C16.4583 6.17837 16.1783 6.45837 15.8333 6.45837H6.66659C6.32159 6.45837 6.04159 6.17837 6.04159 5.83337ZM4.16659 5.20837H3.33325C2.98825 5.20837 2.70825 5.48837 2.70825 5.83337C2.70825 6.17837 2.98825 6.45837 3.33325 6.45837H4.16659C4.51159 6.45837 4.79159 6.17837 4.79159 5.83337C4.79159 5.48837 4.51159 5.20837 4.16659 5.20837ZM4.16659 9.37504H3.33325C2.98825 9.37504 2.70825 9.65504 2.70825 10C2.70825 10.345 2.98825 10.625 3.33325 10.625H4.16659C4.51159 10.625 4.79159 10.345 4.79159 10C4.79159 9.65504 4.51159 9.37504 4.16659 9.37504ZM4.16659 13.5417H3.33325C2.98825 13.5417 2.70825 13.8217 2.70825 14.1667C2.70825 14.5117 2.98825 14.7917 3.33325 14.7917H4.16659C4.51159 14.7917 4.79159 14.5117 4.79159 14.1667C4.79159 13.8217 4.51159 13.5417 4.16659 13.5417ZM15.8333 9.37504H6.66659C6.32159 9.37504 6.04159 9.65504 6.04159 10C6.04159 10.345 6.32159 10.625 6.66659 10.625H15.8333C16.1783 10.625 16.4583 10.345 16.4583 10C16.4583 9.65504 16.1783 9.37504 15.8333 9.37504ZM15.8333 13.5417H6.66659C6.32159 13.5417 6.04159 13.8217 6.04159 14.1667C6.04159 14.5117 6.32159 14.7917 6.66659 14.7917H15.8333C16.1783 14.7917 16.4583 14.5117 16.4583 14.1667C16.4583 13.8217 16.1783 13.5417 15.8333 13.5417Z"
                fill="#004FA2"
              />
            </svg>

            <p className="title">List View</p>

            <p className="index">12</p>

            <button
              className="btn-view"
              onClick={() => setListView((prev) => !prev)}
            ></button>
          </div>
        </div>
      )}

      {listView && (
        <div className="list">
          <div className="container">
            <div className="card-list-view">
              <div className="swiper">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
              </div>
              <p className="title">Ancient Kamiros</p>
              <p className="subTitle">
                Kamiros was one of the three original cities on Rhodes
              </p>
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
            </div>

            <div className="line-list"></div>

            <div className="card-list-view">
              <div className="swiper">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
              </div>
              <p className="title">Ancient Kamiros</p>
              <p className="subTitle">
                Kamiros was one of the three original cities on Rhodes
              </p>
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
            </div>

            <div className="line-list"></div>

            <div className="card-list-view">
              <div className="swiper">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
              </div>
              <p className="title">Ancient Kamiros</p>
              <p className="subTitle">
                Kamiros was one of the three original cities on Rhodes
              </p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
