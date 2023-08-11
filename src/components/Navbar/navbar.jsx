import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const handleClick = (e) => {
    console.log(location["pathname"]);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left_plus}>
        <Link to={"/grade"}>
          <button
            onClick={() => handleClick("grade")}
            className={styles.btn_grade}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2655 15.2913C15.5176 15.2913 16.5368 16.2643 16.5368 17.4603V20.5363C16.5368 20.7933 16.7511 20.9993 17.0256 21.0053H19.0079C20.5699 21.0053 21.8398 19.7993 21.8398 18.3173V9.59325C21.8325 9.08325 21.5798 8.60325 21.1461 8.28425L14.2894 3.02625C13.369 2.32525 12.0815 2.32525 11.1579 3.02825L4.34801 8.28225C3.89769 8.61125 3.64497 9.09125 3.63977 9.61025V18.3173C3.63977 19.7993 4.90961 21.0053 6.47169 21.0053H8.47265C8.75449 21.0053 8.98329 20.7903 8.98329 20.5263C8.98329 20.4683 8.99057 20.4103 9.00305 20.3553V17.4603C9.00305 16.2713 10.016 15.2993 11.2588 15.2913H14.2655ZM19.0079 22.5053H17.0069C15.8608 22.4793 14.9768 21.6143 14.9768 20.5363V17.4603C14.9768 17.0913 14.6575 16.7913 14.2655 16.7913H11.264C10.8803 16.7933 10.5631 17.0943 10.5631 17.4603V20.5263C10.5631 20.6013 10.5527 20.6733 10.5308 20.7413C10.4185 21.7313 9.53865 22.5053 8.47265 22.5053H6.47169C4.04953 22.5053 2.07977 20.6263 2.07977 18.3173V9.60325C2.09017 8.60925 2.56649 7.69925 3.38913 7.10025L10.1855 1.85525C11.6821 0.71525 13.7673 0.71525 15.2607 1.85325L22.106 7.10325C22.9099 7.69225 23.3862 8.60025 23.3998 9.58225V18.3173C23.3998 20.6263 21.43 22.5053 19.0079 22.5053Z"
                fill="black"
              />
            </svg>
          </button>
        </Link>
        <Link to={"/rank"}>
          <button
            onClick={() => handleClick("rank")}
            className={styles.btn_rank}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.84 5.34632C20.3292 4.83533 19.7228 4.42997 19.0554 4.15341C18.3879 3.87684 17.6725 3.7345 16.95 3.7345C16.2275 3.7345 15.5121 3.87684 14.8446 4.15341C14.1772 4.42997 13.5708 4.83533 13.06 5.34632L12 6.40632L10.94 5.34632C9.9083 4.31463 8.50903 3.73503 7.05 3.73503C5.59096 3.73503 4.19169 4.31463 3.16 5.34632C2.1283 6.37801 1.54871 7.77729 1.54871 9.23632C1.54871 10.6954 2.1283 12.0946 3.16 13.1263L4.22 14.1863L12 21.9663L19.78 14.1863L20.84 13.1263C21.351 12.6156 21.7563 12.0091 22.0329 11.3417C22.3095 10.6742 22.4518 9.95881 22.4518 9.23632C22.4518 8.51383 22.3095 7.79843 22.0329 7.13097C21.7563 6.46351 21.351 5.85708 20.84 5.34632V5.34632Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles.plus}>
        <Link to={"/write"}>
          <button
            onClick={() => handleClick("plus")}
            className={styles.plus_btn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M12.56 5V19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.28 12H19.84"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles.right_plus}>
        <Link to={"/board"}>
          <button
            onClick={() => handleClick("board")}
            className={styles.btn_board}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.4923 2.78899H7.7533C4.6783 2.78899 2.75031 4.96599 2.75031 8.04799V16.362C2.75031 19.444 4.6693 21.621 7.7533 21.621H16.5773C19.6623 21.621 21.5813 19.444 21.5813 16.362V12.334"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.8278 10.9209L16.3008 3.4479C17.2318 2.5179 18.7408 2.5179 19.6718 3.4479L20.8888 4.6649C21.8198 5.5959 21.8198 7.1059 20.8888 8.0359L13.3798 15.5449C12.9728 15.9519 12.4208 16.1809 11.8448 16.1809H8.0988L8.1928 12.4009C8.2068 11.8449 8.4338 11.3149 8.8278 10.9209Z"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1652 4.60249L19.7312 9.16849"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <Link to={"/profile"}>
          <button
            onClick={() => handleClick("profile")}
            className={styles.btn_profile}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6335 18.1929C20.6335 21.4889 15.9327 21.8699 12.3978 21.8699L12.1448 21.8697C9.89261 21.8644 4.15992 21.7277 4.15992 18.1729C4.15992 14.9442 8.67181 14.5127 12.1799 14.4964L12.6507 14.4961C14.9028 14.5014 20.6335 14.6381 20.6335 18.1929ZM12.3978 15.9959C7.96632 15.9959 5.71992 16.7279 5.71992 18.1729C5.71992 19.6309 7.96632 20.3699 12.3978 20.3699C16.8282 20.3699 19.0735 19.6379 19.0735 18.1929C19.0735 16.7349 16.8282 15.9959 12.3978 15.9959ZM12.3978 1.99951C15.4429 1.99951 17.9191 4.38151 17.9191 7.30951C17.9191 10.2375 15.4429 12.6185 12.3978 12.6185H12.3645C9.3256 12.6095 6.86392 10.2265 6.87429 7.30651C6.87429 4.38151 9.3516 1.99951 12.3978 1.99951ZM12.3978 3.42751C10.1711 3.42751 8.35942 5.16851 8.35942 7.30951C8.35216 9.44351 10.1503 11.1835 12.3676 11.1915L12.3978 11.9055V11.1915C14.6234 11.1915 16.434 9.44951 16.434 7.30951C16.434 5.16851 14.6234 3.42751 12.3978 3.42751Z"
                fill="black"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
