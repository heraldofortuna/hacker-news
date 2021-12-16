import { useState } from "react";
import "../styles/Card.css";
import clock from "../assets/clock.svg";
import heart from "../assets/heart.svg";
import fillHeart from "../assets/heart-fill.svg";

const Card = ({ data }) => {
  const [fave, setFave] = useState(false);
  const timeMs = new Date() - new Date(data.created_at);
  let time = "0 seconds";

  if (Math.trunc(timeMs / 60000) > 60) {
    time = Math.trunc(timeMs / 3600000).toLocaleString() + " hours";
  } else if (Math.trunc(timeMs / 1000) > 60) {
    time = Math.trunc(timeMs / 60000).toLocaleString() + " minutes";
  }

  const faveToogle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setFave(!fave);
    addFaveNewToStorage(data, fave);
  };

  const addFaveNewToStorage = (data, fave) => {
    if (fave) {
      localStorage.removeItem(data.objectID);
    } else {
      localStorage.setItem(
        data.objectID,
        JSON.stringify({ ...data, isFave: !fave })
      );
    }
  };

  return (
    <a className="card" href={data.story_url} target="_blank" rel="noreferrer">
      <div className="card__content">
        <div className="card__content__time">
          <img
            className="card__content__time__icon"
            src={clock}
            alt="Publication time by author icon"
          />
          <p className="card__content__time__text">
            {time} ago by {data.author}
          </p>
        </div>
        <p className="card__content__title">{data.story_title}</p>
      </div>
      <div className="card__fave">
        <img
          className="card__fave__icon"
          onClick={faveToogle}
          src={fave ? fillHeart : heart}
          alt="Favorite publication icon"
        />
      </div>
    </a>
  );
};

export default Card;
