import { selectSong } from "../Action";

export const songReducer = () => {
  return [
    { title: "Baby boys", duration: "4.05" },
    { title: "take a bow", duration: "3.05" },
    { title: "cold", duration: "3.45" },
    { title: "Rainbow", duration: "3.43" },
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};
