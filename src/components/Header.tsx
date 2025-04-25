import logo from "../../public/assets/logo.svg";
import homeIcon from "../../public/assets/icon-nav-home.svg";
import moviesIcon from "../../public/assets/icon-nav-movies.svg";
import tvSeriesIcon from "../../public/assets/icon-nav-tv-series.svg";
import bookMarkIcon from "../../public/assets/icon-nav-bookmark.svg";
import avatar from "../../public/assets/image-avatar.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleHome = () => {
    navigate("/home");
  };
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full py-[18px] px-[16px] flex items-center justify-between bg-header">
      <div className="logo">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="nav flex items-center gap-[25px]">
        <img
          src={homeIcon}
          alt="home icon"
          onClick={handleHome}
          className={isActive("/home") ? "filter-white" : "filter-gray"}
        />
        <img src={moviesIcon} alt="moviesIcon" />
        <img src={tvSeriesIcon} alt="series icon" />
        <img src={bookMarkIcon} alt="bookmark icon" />
      </div>
      <div className="avatar">
        <img
          src={avatar}
          alt="avatar"
          className="w-[24px] h-[24px] border-[1px] rounded-[50%] border-white"
        />
      </div>
    </header>
  );
}
