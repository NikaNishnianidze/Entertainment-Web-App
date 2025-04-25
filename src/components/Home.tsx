import { useState } from "react";
import searchIcon from "../../public/assets/icon-search.svg";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
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
    </>
  );
}
