import { useState } from "react";
import searchIcon from "../../public/assets/icon-search.svg";
import { UseMediaContext } from "../context/WebProvider";
import bookmarkicon from "../../public/assets/icon-bookmark-empty.svg";
import movieIcon from "../../public/assets/icon-nav-movies.svg";
import tvSeriesIcon from "../../public/assets/icon-nav-tv-series.svg";
import oval from "../../public/assets/Oval.svg";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { mediaData } = UseMediaContext();
  const trendingMedia = mediaData.filter((media) => media.isTrending);
  const regularMedia = mediaData.filter((media) => !media.isTrending);
  const filteredMedia = mediaData.filter((media) =>
    media.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="search mt-[26px] flex items-center gap-[16px] pl-[16px]">
        <img src={searchIcon} alt="search icon" className="w-[24px] h-[24px]" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          onChange={(e) => setSearchValue(e.target.value)}
          className="text-[#fff] text-[16px] font-medium w-[230px] py-[2px] outline-none"
        />
      </div>
      {searchValue && filteredMedia.length > 0 ? (
        <div>
          <p className="pl-[16px] mt-[26px] text-[#fff] text-[20px] font-normal">
            Found {filteredMedia.length} results for {`'${searchValue}'`}
          </p>
          <div className="recommended flex flex-row items-center justify-center flex-wrap mb-[60px] px-[16px] gap-[15px] mt-[24px]">
            {filteredMedia.map((media) => {
              return (
                <div className="mt-[24px] w-[164px] mb-[16px] h-[110px] rounded-[8px] relative">
                  <img
                    src={media.thumbnail.regular?.small}
                    alt="film thumbnails"
                    className="rounded-[8px]"
                  />
                  <div className="bookmark absolute top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-bookmark/50 flex items-center justify-center">
                    <img src={bookmarkicon} alt="" />
                  </div>
                  <div className="info flex flex-col mt-[10px] text-[11px] font-normal text-[#fff]">
                    <div className="inline-div flex flex-row items-center gap-[8px]">
                      <p>{media.year}</p>
                      <img src={oval} alt="oval icon" />
                      <div className="movie flex flex-row items-center gap-[6px]">
                        <img
                          src={movieIcon}
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
        <div className="films">
          <p className="pl-[16px] mt-[26px] text-[#fff] text-[20px] font-normal">
            Trending
          </p>
          <div className="trending flex flex-row items-center gap-[16px] mt-[16px] overflow-x-auto scrollbar-hide pl-[16px]">
            {trendingMedia.map((media) => {
              return (
                <div className="flex-shrink-0 relative" key={media.title}>
                  <img
                    src={media.thumbnail.trending?.small}
                    alt="thumbnails"
                    className="w-[240px] h-[140px] rounded-[8px]"
                  />
                  <div className="bookmark absolute top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-bookmark/50 flex items-center justify-center">
                    <img src={bookmarkicon} alt="" />
                  </div>
                  <div className="info absolute bottom-2 left-2 flex flex-col gap-[5px] text-[12px] font-normal text-[#fff]">
                    <div className="inline-div flex flex-row items-center gap-[8px]">
                      <p>{media.year}</p>
                      <img src={oval} alt="oval icon" />
                      <div className="movie flex flex-row items-center gap-[6px]">
                        <img
                          src={movieIcon}
                          alt="movie icon"
                          className="filter-white w-[12px] h-[12px]"
                        />
                        <p>{media.category}</p>
                      </div>
                      <img src={oval} alt="oval icon" />
                      <p>{media.rating}</p>
                    </div>
                    <div className="name">
                      <p className="text-[15px]">{media.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[#fff] text-[20px] font-normal px-[16px] mt-[24px]">
            Recommended for you
          </p>
          <div className="recommended flex flex-row items-center justify-center flex-wrap mb-[60px] px-[16px] gap-[15px] mt-[24px]">
            {regularMedia.map((media) => {
              return (
                <div className="mt-[24px] w-[164px] mb-[16px] h-[110px] rounded-[8px] relative">
                  <img
                    src={media.thumbnail.regular?.small}
                    alt="film thumbnails"
                    className="rounded-[8px]"
                  />
                  <div className="bookmark absolute top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-bookmark/50 flex items-center justify-center">
                    <img src={bookmarkicon} alt="" />
                  </div>
                  <div className="info flex flex-col mt-[10px] text-[11px] font-normal text-[#fff]">
                    <div className="inline-div flex flex-row items-center gap-[8px]">
                      <p>{media.year}</p>
                      <img src={oval} alt="oval icon" />
                      <div className="movie flex flex-row items-center gap-[6px]">
                        <img
                          src={movieIcon}
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
      )}
    </>
  );
}
