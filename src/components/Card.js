import "../styles/Card.css";
import clock from "../assets/clock.svg";
import heart from "../assets/heart.svg";

const Card = ({ data }) => {
  const timeMs = new Date() - new Date(data.created_at);
  let time = "0 seconds";

  if (Math.trunc(timeMs / 60000) > 60) {
    time = Math.trunc(timeMs / 3600000).toLocaleString() + " hours";
  } else if (Math.trunc(timeMs / 1000) > 60) {
    time = Math.trunc(timeMs / 60000).toLocaleString() + " minutes";
  }

  return (
    <div className="card">
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
          src={heart}
          alt="Favorite publication icon"
        />
      </div>
    </div>
  );
};

export default Card;
