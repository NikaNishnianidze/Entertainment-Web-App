import { createContext, useContext, useState } from "react";
import data from "../data.json";
import { Media } from "../data";

interface MediaContext {
  mediaData: Media[];
  setMediaData: React.Dispatch<React.SetStateAction<Media[]>>;
  isBookmarked: boolean;
  setIsBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (mediaId: number) => void;
}

const mediaContext = createContext<MediaContext>({
  mediaData: [],
  setMediaData: () => {},
  isBookmarked: false,
  setIsBookmarked: () => {},
  handleClick: () => {},
});

export default function WebProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mediaData, setMediaData] = useState<Media[]>(data);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const handleClick = (mediaId: number) => {
    const updatedData = mediaData.map((media) => {
      if (media.id === mediaId) {
        return { ...media, isBookmarked: !media.isBookmarked };
      }
      return media;
    });
    setMediaData(updatedData);
  };

  return (
    <mediaContext.Provider
      value={{
        mediaData,
        setMediaData,
        isBookmarked,
        setIsBookmarked,
        handleClick,
      }}
    >
      {children}
    </mediaContext.Provider>
  );
}

export const UseMediaContext = () => {
  const context = useContext(mediaContext);
  return context;
};
