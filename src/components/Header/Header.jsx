import React, { useState } from "react";
import "../Header/Header.scss";

const Header = () => {
  const [btnClick, setBtnClick] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-image">
            <svg
              width="90"
              height="30"
              viewBox="0 0 90 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.6401 28.6026C83.9139 28.6026 83.233 28.5027 82.5976 28.303C81.9621 28.1033 81.3993 27.8582 80.9091 27.5677C80.4189 27.2591 80.0285 26.9504 79.738 26.6417C79.6109 26.4965 79.5474 26.324 79.5474 26.1243C79.5655 25.9064 79.6926 25.6704 79.9286 25.4162C80.1284 25.2165 80.3099 25.0985 80.4733 25.0622C80.6367 25.0259 80.8183 25.0803 81.018 25.2256C81.6898 25.7339 82.3252 26.1152 82.9244 26.3694C83.5417 26.6054 84.1318 26.7235 84.6946 26.7235C85.2393 26.7235 85.7204 26.6417 86.138 26.4783C86.5556 26.2968 86.8824 26.0335 87.1184 25.6886C87.3726 25.3436 87.4997 24.9351 87.4997 24.463C87.4997 23.882 87.3272 23.4372 86.9823 23.1286C86.6373 22.8017 86.1925 22.5566 85.6478 22.3932C85.1213 22.2117 84.5584 22.0392 83.9593 21.8758C83.3601 21.6942 82.7882 21.4673 82.2435 21.1949C81.717 20.9044 81.2813 20.505 80.9363 19.9966C80.5913 19.4883 80.4189 18.7983 80.4189 17.9269C80.4189 17.1643 80.6095 16.4835 80.9908 15.8843C81.3902 15.2852 81.9349 14.8131 82.6248 14.4681C83.3329 14.1232 84.1408 13.9507 85.0486 13.9507C85.7749 13.9507 86.4194 14.0324 86.9823 14.1958C87.5633 14.341 88.0625 14.5408 88.4801 14.7949C88.9159 15.031 89.2699 15.2942 89.5423 15.5847C89.742 15.7844 89.8237 15.9842 89.7874 16.1839C89.7692 16.3654 89.6603 16.5652 89.4606 16.783C89.2608 17.0191 89.0611 17.1552 88.8614 17.1915C88.6798 17.2097 88.4711 17.1371 88.235 16.9737C87.7267 16.6105 87.2183 16.3291 86.7099 16.1294C86.2015 15.9297 85.6387 15.8298 85.0214 15.8298C84.3678 15.8298 83.8231 15.9932 83.3874 16.32C82.9698 16.6287 82.761 17.0735 82.761 17.6545C82.761 18.1992 82.9244 18.6259 83.2512 18.9345C83.5962 19.225 84.0319 19.4701 84.5584 19.6698C85.1031 19.8514 85.675 20.033 86.2742 20.2145C86.8915 20.3961 87.4634 20.6321 87.9899 20.9226C88.5346 21.2131 88.9703 21.6125 89.2972 22.1209C89.6421 22.6111 89.8146 23.2738 89.8146 24.109C89.8146 24.8897 89.624 25.625 89.2427 26.3149C88.8796 27.0049 88.3167 27.5586 87.5542 27.9762C86.7916 28.3938 85.8203 28.6026 84.6401 28.6026Z"
                fill="white"
              />
              <path
                d="M75.0758 28.5481C74.1317 28.5481 73.4418 28.303 73.006 27.8128C72.5884 27.3225 72.3796 26.6326 72.3796 25.743V14.7677C72.3796 14.5316 72.4704 14.3591 72.652 14.2502C72.8517 14.1231 73.1422 14.0596 73.5235 14.0596C73.9229 14.0596 74.2225 14.1231 74.4222 14.2502C74.6219 14.3591 74.7218 14.5316 74.7218 14.7677V25.4706C74.7218 25.8338 74.8035 26.097 74.9669 26.2604C75.1303 26.4238 75.33 26.5055 75.566 26.5055C75.7657 26.5055 75.9291 26.4783 76.0562 26.4238C76.2015 26.3512 76.3286 26.2695 76.4375 26.1787C76.5646 26.0879 76.7008 25.9881 76.846 25.8791C76.955 25.7884 77.1002 25.7793 77.2818 25.8519C77.4815 25.9245 77.6358 26.0335 77.7447 26.1787C77.89 26.3421 77.9717 26.5146 77.9899 26.6962C78.008 26.8777 77.9626 27.0411 77.8537 27.1864C77.654 27.4769 77.3998 27.722 77.0911 27.9217C76.8006 28.1214 76.4738 28.2757 76.1107 28.3847C75.7657 28.4936 75.4208 28.5481 75.0758 28.5481Z"
                fill="white"
              />
              <path
                d="M67.096 28.548C66.8418 28.548 66.6603 28.4391 66.5513 28.2212C66.4243 28.0215 66.3789 27.7945 66.4152 27.5404C66.4333 27.268 66.5423 27.032 66.742 26.8323C66.9417 26.6144 67.2322 26.5055 67.6135 26.5055C68.2126 26.5055 68.7664 26.4056 69.2748 26.2059C69.7831 26.0062 70.2461 25.7247 70.6637 25.3616C71.0813 24.9985 71.4444 24.5718 71.753 24.0816C72.0799 23.5914 72.3522 23.0649 72.5701 22.5021C72.679 22.2297 72.8333 22.1117 73.0331 22.148C73.2509 22.1662 73.4325 22.266 73.5777 22.4476C73.7411 22.6291 73.7956 22.8198 73.7411 23.0195C73.4688 23.891 73.1148 24.6717 72.679 25.3616C72.2614 26.0334 71.7712 26.6144 71.2084 27.1046C70.6637 27.5767 70.0464 27.9307 69.3565 28.1667C68.6665 28.4209 67.913 28.548 67.096 28.548Z"
                fill="white"
              />
              <path
                d="M59.045 28.5481C58.0101 28.5481 57.0932 28.303 56.2944 27.8128C55.4955 27.3044 54.8691 26.5419 54.4152 25.5251C53.9613 24.5084 53.7344 23.2284 53.7344 21.6851C53.7344 20.741 53.8252 19.8695 54.0067 19.0707C54.1883 18.2718 54.4515 17.5546 54.7965 16.9192C55.1415 16.2837 55.5591 15.7481 56.0493 15.3124C56.5576 14.8766 57.1386 14.5407 57.7922 14.3047C58.4459 14.0687 59.163 13.9507 59.9437 13.9507C60.4884 13.9507 61.0603 14.0415 61.6595 14.223C62.2768 14.3864 62.8578 14.6134 63.4025 14.9039V2.83919C63.4025 2.60316 63.5023 2.43068 63.702 2.32174C63.9017 2.19465 64.2013 2.1311 64.6008 2.1311C65.0002 2.1311 65.2907 2.19465 65.4722 2.32174C65.6538 2.43068 65.7446 2.60316 65.7446 2.83919V24.4086C65.7446 25.2256 65.8717 25.7793 66.1259 26.0698C66.3982 26.3603 66.8975 26.5056 67.6237 26.5056C67.8416 26.5056 68.005 26.6145 68.114 26.8324C68.2229 27.0321 68.2592 27.2681 68.2229 27.5405C68.2047 27.7946 68.1049 28.0216 67.9233 28.2213C67.7417 28.4392 67.4694 28.5481 67.1063 28.5481C66.5979 28.5481 66.1349 28.4937 65.7174 28.3847C65.3179 28.2939 64.973 28.1396 64.6825 27.9217C64.392 27.7039 64.1469 27.4406 63.9471 27.132C63.7656 26.8051 63.6385 26.4239 63.5659 25.9881L63.5386 25.8247C63.121 26.551 62.6581 27.1138 62.1497 27.5132C61.6413 27.9127 61.1239 28.185 60.5974 28.3302C60.0708 28.4755 59.5534 28.5481 59.045 28.5481ZM59.3991 26.3694C59.9256 26.3694 60.4249 26.2786 60.8969 26.0971C61.369 25.8973 61.8138 25.5978 62.2314 25.1983C62.6671 24.7808 63.0575 24.2361 63.4025 23.5643V17.0826C62.8396 16.7195 62.2859 16.4653 61.7412 16.32C61.2147 16.1748 60.6609 16.1022 60.0799 16.1022C59.6079 16.1022 59.163 16.1748 58.7454 16.32C58.346 16.4653 57.9829 16.6832 57.6561 16.9737C57.3474 17.2642 57.0751 17.6273 56.8391 18.063C56.6212 18.4988 56.4487 19.0071 56.3216 19.5881C56.2127 20.1691 56.1582 20.8318 56.1582 21.5762C56.1582 22.5748 56.2762 23.4372 56.5122 24.1634C56.7483 24.8715 57.1023 25.4162 57.5744 25.7975C58.0646 26.1788 58.6728 26.3694 59.3991 26.3694Z"
                fill="white"
              />
              <path
                d="M49.6493 28.5481C49.3951 28.5481 49.2135 28.4392 49.1046 28.2213C48.9775 28.0216 48.9321 27.7947 48.9684 27.5405C48.9866 27.2681 49.0955 27.0321 49.2952 26.8324C49.4949 26.6145 49.7854 26.5056 50.1667 26.5056C50.7114 26.5056 51.2016 26.4329 51.6373 26.2877C52.0549 26.1425 52.418 25.9246 52.7267 25.6341C53.0354 25.3436 53.2805 24.9805 53.462 24.5447C53.6617 24.109 53.7979 23.6006 53.8705 23.0196C53.9068 22.7473 54.043 22.5748 54.279 22.5022C54.5151 22.4114 54.742 22.4114 54.9599 22.5022C55.1959 22.5748 55.2958 22.7473 55.2595 23.0196C55.1868 23.9819 54.9962 24.8171 54.6876 25.5251C54.3789 26.2151 53.9795 26.787 53.4893 27.2409C52.999 27.6766 52.4271 28.0034 51.7735 28.2213C51.138 28.4392 50.43 28.5481 49.6493 28.5481Z"
                fill="white"
              />
              <path
                d="M49.6546 28.5481C49.0373 28.5481 48.5017 28.4573 48.0478 28.2757C47.5939 28.1123 47.2217 27.8582 46.9312 27.5132C46.6407 27.1501 46.4228 26.7052 46.2776 26.1787C46.1505 25.634 46.0869 24.9986 46.0869 24.2723V15.7677C46.0869 15.5316 46.1777 15.3591 46.3593 15.2502C46.559 15.1231 46.8495 15.0596 47.2307 15.0596C47.6302 15.0596 47.9298 15.1231 48.1295 15.2502C48.3292 15.3591 48.429 15.5316 48.429 15.7677V24.2723C48.429 25.0894 48.5471 25.6704 48.7831 26.0153C49.0373 26.3421 49.5002 26.5055 50.172 26.5055C50.4262 26.5055 50.6168 26.6145 50.7439 26.8323C50.871 27.0321 50.9164 27.2681 50.8801 27.5404C50.8619 27.7946 50.753 28.0216 50.5533 28.2213C50.3536 28.4391 50.054 28.5481 49.6546 28.5481Z"
                fill="white"
              />
              <path
                d="M36.5879 28.4936C36.1885 28.4936 35.898 28.4301 35.7164 28.303C35.553 28.1759 35.4259 28.0034 35.3351 27.7855L30.3513 15.4213C30.2061 15.0582 30.2424 14.7404 30.4602 14.4681C30.6781 14.1957 31.0412 14.0596 31.5496 14.0596C31.8219 14.0596 32.0307 14.114 32.176 14.223C32.3394 14.3319 32.4665 14.5135 32.5573 14.7677L36.6151 25.1166L40.5913 14.7677C40.7002 14.5135 40.8364 14.3319 40.9998 14.223C41.1632 14.114 41.3811 14.0596 41.6534 14.0596C42.18 14.0596 42.5431 14.1867 42.7428 14.4408C42.9425 14.695 42.9697 15.0218 42.8245 15.4213L37.8407 27.7855C37.768 28.0034 37.641 28.1759 37.4594 28.303C37.2778 28.4301 36.9873 28.4936 36.5879 28.4936Z"
                fill="white"
              />
              <path
                d="M26.7618 28.5481C25.8177 28.5481 25.1278 28.303 24.6921 27.8128C24.2745 27.3225 24.0657 26.6326 24.0657 25.743V14.7677C24.0657 14.5316 24.1565 14.3591 24.338 14.2502C24.5377 14.1231 24.8282 14.0596 25.2095 14.0596C25.6089 14.0596 25.9085 14.1231 26.1082 14.2502C26.3079 14.3591 26.4078 14.5316 26.4078 14.7677V25.4706C26.4078 25.8338 26.4895 26.097 26.6529 26.2604C26.8163 26.4238 27.016 26.5055 27.2521 26.5055C27.4518 26.5055 27.6152 26.4783 27.7423 26.4238C27.8875 26.3512 28.0146 26.2695 28.1235 26.1787C28.2506 26.0879 28.3868 25.9881 28.5321 25.8791C28.641 25.7884 28.7862 25.7793 28.9678 25.8519C29.1675 25.9245 29.3218 26.0335 29.4308 26.1787C29.576 26.3421 29.6577 26.5146 29.6759 26.6962C29.694 26.8777 29.6487 27.0411 29.5397 27.1864C29.34 27.4769 29.0858 27.722 28.7772 27.9217C28.4867 28.1214 28.1599 28.2757 27.7967 28.3847C27.4518 28.4936 27.1068 28.5481 26.7618 28.5481Z"
                fill="white"
              />
              <circle cx="25.1758" cy="10.1065" r="1.59574" fill="white" />
              <circle cx="47.2" cy="10.1001" r="3" fill="#F79D2B" />
              <circle cx="73.5801" cy="10.1065" r="1.59574" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.0229 10.8807C21.2778 9.68138 21.4322 8.59361 21.4963 7.61165C21.6462 7.55522 21.7968 7.49793 21.9481 7.44016C22.1061 7.37982 22.2652 7.31876 22.4257 7.25721C23.3134 6.91662 24.2402 6.56102 25.2295 6.22854C25.7591 6.05055 26.3041 5.88 26.8641 5.72426C26.8641 5.72426 28.0063 5.50002 27.707 4.28159C27.4078 3.06316 26.35 3.43892 26.35 3.43892C25.7052 3.61514 25.0829 3.80876 24.4839 4.01005C23.4437 4.35963 22.4653 4.7351 21.5783 5.0755L21.4468 5.12596C21.3516 4.34674 21.1773 3.66559 20.9336 3.07705C20.1811 1.25938 18.7576 0.348265 17.2213 0.358732C15.7816 0.368541 14.4184 1.19372 13.6924 2.4319C12.9274 3.73657 12.9005 5.43308 13.9959 7.04162C14.5896 7.91348 15.3844 8.42908 16.3283 8.61448C17.2139 8.78842 18.1484 8.6554 19.0443 8.42512L19.0698 8.41854C18.9961 9.01855 18.8863 9.67572 18.7336 10.3942C17.3195 17.0486 15.0383 21.3667 13.1506 23.9983C12.5129 24.8872 11.9184 25.5861 11.4147 26.1194C11.3562 25.6588 11.2855 25.1374 11.2005 24.5627C10.85 22.1899 10.257 18.9011 9.28585 15.2324C8.2891 11.4669 6.60639 8.24544 5.18351 5.97418C4.47029 4.83569 3.81763 3.92847 3.34053 3.30267C3.10186 2.98959 2.90673 2.74644 2.76945 2.57947C2.37143 2.09538 2.10135 1.78864 1.94388 1.61555C1.83195 1.49252 1.69729 1.38157 1.53098 1.37952C1.33221 1.37706 1.01606 1.45304 0.601419 1.80847C0.29142 2.0742 0.137694 2.32116 0.063851 2.51892C-0.0437836 2.80717 0.119189 3.09628 0.321798 3.32785C0.720143 3.78314 1.10977 4.2369 1.4793 4.72161C1.91976 5.29936 2.5304 6.1476 3.20015 7.21669C4.54323 9.3606 6.1052 12.3628 7.02335 15.8313C7.96713 19.3967 8.54431 22.597 8.88525 24.9047C9.05562 26.0579 9.16673 26.9864 9.23506 27.6241C9.26922 27.9429 9.29267 28.1889 9.30748 28.3537C9.31488 28.4361 9.32012 28.4983 9.32345 28.5391C9.32512 28.5595 9.32631 28.5745 9.32706 28.5841L9.32786 28.5944L9.32801 28.5964C9.35863 29.0098 9.60562 29.3761 9.97734 29.5595C10.3491 29.7428 10.79 29.7159 11.1367 29.4886L10.4967 28.5125C11.1367 29.4886 11.1373 29.4882 11.1379 29.4878L11.1394 29.4868L11.1427 29.4846L11.1511 29.479C11.1574 29.4748 11.1653 29.4694 11.1748 29.463C11.1936 29.4501 11.2186 29.4327 11.2492 29.4108C11.3105 29.367 11.3948 29.3048 11.4996 29.223C11.7092 29.0594 12.0006 28.8174 12.3538 28.4868C13.0605 27.8255 14.0134 26.8108 15.0523 25.3624C17.1327 22.4622 19.5432 17.844 21.0229 10.8807ZM19.1722 5.95189C19.1218 5.10305 18.9706 4.45398 18.7712 3.97232C18.3415 2.93453 17.717 2.69583 17.2373 2.6991C16.661 2.70303 16.04 3.05513 15.7114 3.61566C15.4217 4.10971 15.3236 4.83334 15.9303 5.72426C16.1877 6.10214 16.4567 6.25456 16.7794 6.31793C17.1604 6.39277 17.6954 6.35532 18.4617 6.15837C18.6882 6.10014 18.9247 6.03086 19.1722 5.95189Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.5967 5.14325C33.9687 4.87319 32.4322 4.86296 30.9833 5.02301C30.3409 5.09397 29.7626 4.63074 29.6916 3.98835C29.6207 3.34597 30.0839 2.76769 30.7263 2.69673C32.3692 2.51525 34.122 2.52622 35.9797 2.83438C36.6172 2.94014 37.0484 3.54274 36.9426 4.18031C36.8368 4.81789 36.2342 5.24901 35.5967 5.14325ZM38.7195 4.697C38.9797 4.10542 39.6702 3.83682 40.2618 4.09707C41.0251 4.43282 41.8002 4.82217 42.5873 5.26993C43.1491 5.5895 43.3454 6.30395 43.0259 6.86571C42.7063 7.42746 41.9918 7.62379 41.4301 7.30422C40.7103 6.89476 40.0067 6.54173 39.3194 6.23936C38.7278 5.97912 38.4592 5.28858 38.7195 4.697Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="header-menu">
            <button onClick={() => setBtnClick((prev) => !prev)}>
              {!btnClick ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2336_749)">
                    <path
                      d="M13.4853 11.9995L19.6719 5.81295C20.0821 5.40275 20.0821 4.73775 19.6719 4.32755C19.2617 3.91735 18.5967 3.91735 18.1865 4.32755L11.9999 10.5141L5.81331 4.32755C5.40311 3.91735 4.73811 3.91735 4.32791 4.32755C3.91771 4.73775 3.91771 5.40275 4.32791 5.81295L10.5145 11.9995L4.32791 18.1861C3.91771 18.5963 3.91771 19.2613 4.32791 19.6715C4.53231 19.8759 4.80111 19.9795 5.06991 19.9795C5.33871 19.9795 5.60751 19.8773 5.81191 19.6715L11.9985 13.4849L18.1851 19.6715C18.3895 19.8759 18.6583 19.9795 18.9271 19.9795C19.1959 19.9795 19.4647 19.8773 19.6691 19.6715C20.0793 19.2613 20.0793 18.5963 19.6691 18.1861L13.4825 11.9995H13.4853Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2336_749">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
        </div>

        {btnClick && (
          <div className={`header-signin ${btnClick ? "header-signin--active" : ""}`}>
            <div className="header-signin-login">
              <button className="header-signin-login__button">Sign in</button>
            </div>
            <div className="header-signin-about">
              <button className="header-signin-about__button">About</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
