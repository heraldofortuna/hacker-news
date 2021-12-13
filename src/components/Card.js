import "../styles/Card.css";
import clock from "../assets/clock.svg";
import heart from "../assets/heart.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__time">
          <img
            className="card__content__time__icon"
            src={clock}
            alt="Publication time by author icon"
          />
          <p className="card__content__time__text">2 hours ago by author</p>
        </div>
        <p className="card__content__title">
          Event-driven state management in React using Storeon
        </p>
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
