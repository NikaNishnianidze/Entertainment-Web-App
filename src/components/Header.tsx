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
  const handleMovies = () => {
    navigate("/movies");
  };

  const handleTvSeries = () => {
    navigate("/tv-series");
  };
  const handleBookMark = () => {
    navigate("/book-mark");
  };
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="tb:p-[24px] dk:fixed dk:top-0 dk:left-0 dk:h-screen dk:w-[96px] dk:flex dk:flex-col dk:items-center dk:justify-between dk:py-[32px] dk:px-0 tb:p-[24px] dk:ml-[32px]">
      <header className="w-full  py-[18px] px-[16px] tb:p-[24px] flex items-center justify-between tb:rounded-[10px] bg-header dk:flex-col dk:gap-[75px] dk:w-[96px] dk:h-full dk:py-[32px] dk:px-0 ">
        <div className="logo dk:mb-auto">
          <img src={logo} alt="logo icon" onClick={handleHome} />
        </div>
        <div className="nav flex items-center gap-[25px] dk:flex-col">
          <img
            src={homeIcon}
            alt="home icon"
            onClick={handleHome}
            className={isActive("/home") ? "filter-white" : "filter-gray"}
          />
          <img
            src={moviesIcon}
            alt="moviesIcon"
            onClick={handleMovies}
            className={isActive("/movies") ? "filter-white" : "filter-gray"}
          />
          <img
            src={tvSeriesIcon}
            alt="series icon"
            onClick={handleTvSeries}
            className={isActive("/tv-series") ? "filter-white" : "filter-gray"}
          />
          <img
            src={bookMarkIcon}
            alt="bookmark icon"
            onClick={handleBookMark}
            className={isActive("/book-mark") ? "filter-white" : "filter-gray"}
          />
        </div>
        <div className="avatar dk:mt-auto">
          <img
            src={avatar}
            alt="avatar"
            className="w-[24px] h-[24px] border-[1px] rounded-[50%] border-white tb:w-[32px] tb:h-[32px] dk:w-[40px] dk:h-[40px]"
          />
        </div>
      </header>
    </div>
  );
}
