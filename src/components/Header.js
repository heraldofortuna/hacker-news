import "../styles/Header.css";
import logo from "../assets/hacker-news.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="Hacker news official logo" />
      </div>
    </header>
  );
};

export default Header;
