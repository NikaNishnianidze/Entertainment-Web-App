import { UseMediaContext } from "../context/WebProvider";
import searchIcon from "../../public/assets/icon-search.svg";
import { useState } from "react";
import oval from "../../public/assets/Oval.svg";
import bookmarkicon from "../../public/assets/icon-bookmark-empty.svg";
import movieIcon from "../../public/assets/icon-nav-movies.svg";
import tvSeriesIcon from "../../public/assets/icon-nav-tv-series.svg";

export default function TvSeries() {
  const { mediaData, handleClick } = UseMediaContext();
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredMovies = mediaData.filter((media) =>
    media.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const tvseries = mediaData.filter(
    (media) => media.category === "Movie" && media.isTrending == false
  );
  return (
    <div className="dk:pl-[164px]">
      <div className="search mt-[26px] flex items-center gap-[16px] pl-[16px] tb:pl-[25px] tb:mt-[33px] tb:gap-[24px]">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-[24px] h-[24px] tb:w-[32px] tb:h-[32px]"
        />
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => setSearchValue(e.target.value)}
          className="text-[#fff] text-[16px] font-medium w-[230px] py-[2px] outline-none"
        />
      </div>
      {searchValue && filteredMovies.length > 0 ? (
        <div>
          <p className="pl-[16px] mt-[26px] text-[#fff] text-[20px] font-normal tb:pl-[25px] tb:mt-[34px] tb:text-[32px]">
            Found {filteredMovies.length} results for {`'${searchValue}'`}
          </p>
          <div className="recommended flex flex-row items-center justify-center tb:justify-start tb:pl-[25px] tb:gap-[29px] flex-wrap mb-[60px] px-[16px] gap-[15px] mt-[24px]">
            {filteredMovies.map((media) => {
              return (
                <div
                  key={media.title}
                  className="mt-[24px] w-[164px] mb-[16px] h-[110px] rounded-[8px] relative tb:w-[220px] tb:h-[140px] dk:w-[280px] dk:h-[174px]"
                >
                  <img
                    src={media.thumbnail.regular?.small}
                    alt="film thumbnails"
                    className="rounded-[8px]"
                  />
                  <div
                    onClick={() => handleClick(media.id)}
                    className="bookmark absolute top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-bookmark/50 flex items-center justify-center"
                  >
                    <img src={bookmarkicon} alt="" />
                  </div>
                  <div className="info flex flex-col mt-[10px] text-[11px] font-normal text-[#fff]">
                    <div className="inline-div flex flex-row items-center gap-[8px]">
                      <p>{media.year}</p>
                      <img src={oval} alt="oval icon" />
                      <div className="movie flex flex-row items-center gap-[6px]">
                        <img
                          src={
                            media.category === "Movie"
                              ? movieIcon
                              : tvSeriesIcon
                          }
                          alt="movie icon"
                          className="filter-white w-[12px] h-[12px]"
                        />
                        <p>{media.category}</p>
                      </div>
                      <img src={oval} alt="oval icon" />
                      <p>{media.rating}</p>
                    </div>
                    <div className="name">
                      <p className="text-[14px]">{media.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <p className="px-[16px] mt-[26px] text-[#fff] text-[20px] font-normal tb:mt-[34px] tb:pl-[25px] tb:text-[32px]">
            Movies
          </p>
          <div className="recommended flex flex-row items-center justify-center flex-wrap mb-[60px] px-[16px] gap-[15px] mt-[24px] tb:gap-[29px] ">
            {tvseries.map((media) => {
              return (
                <div
                  key={media.title}
                  className="mt-[24px] w-[164px] mb-[16px] h-[110px] rounded-[8px] relative tb:w-[220px] tb:h-[140px] dk:w-[280px] dk:h-[174px]"
                >
                  <img
                    src={media.thumbnail.regular?.small}
                    alt="film thumbnails"
                    className="rounded-[8px]"
                  />
                  <div
                    onClick={() => handleClick(media.id)}
                    className="bookmark absolute top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-bookmark/50 flex items-center justify-center"
                  >
                    <img src={bookmarkicon} alt="" />
                  </div>
                  <div className="info flex flex-col mt-[10px] text-[11px] font-normal text-[#fff] tb:text-[13px]">
                    <div className="inline-div flex flex-row items-center gap-[8px]">
                      <p>{media.year}</p>
                      <img src={oval} alt="oval icon" />
                      <div className="movie flex flex-row items-center gap-[6px]">
                        <img
                          src={
                            media.category === "Movie"
                              ? movieIcon
                              : tvSeriesIcon
                          }
                          alt="movie icon"
                          className="filter-white w-[12px] h-[12px]"
                        />
                        <p>{media.category}</p>
                      </div>
                      <img src={oval} alt="oval icon" />
                      <p>{media.rating}</p>
                    </div>
                    <div className="name">
                      <p className="text-[14px] tb:text-[18px]">
                        {media.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
