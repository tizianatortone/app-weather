import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <span>
        <button id="standing">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-geo-alt"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              fillRule="evenodd"
              d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
        </button>
        <form>
          <input
            type="search"
            id="change-city"
            placeholder="        🔍 Type a city..."
          />
          <button className="search" type="submit" value="search">
            {" "}
            Search{" "}
          </button>
        </form>
      </span>
    </div>
  );
}
