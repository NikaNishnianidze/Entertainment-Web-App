import { createContext, useContext, useState } from "react";
import data from "../data.json";
import { Media } from "../data";

interface MediaContext {
  mediaData: Media[];
  setMediaData: React.Dispatch<React.SetStateAction<Media[]>>;
}

const mediaContext = createContext<MediaContext>({
  mediaData: [],
  setMediaData: () => {},
});

export default function WebProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mediaData, setMediaData] = useState<Media[]>(data);
  return (
    <mediaContext.Provider value={{ mediaData, setMediaData }}>
      {children}
    </mediaContext.Provider>
  );
}

export const UseMediaContext = () => {
  const context = useContext(mediaContext);
  return context;
};
