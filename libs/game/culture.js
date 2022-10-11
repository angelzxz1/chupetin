const culture = {
  list: [
    "Free space 1",
    "Free space 2",
    "Free space 3",
    "Free space 4",
    "Free space 5",
    "Free space 6",
    "Free space 7",
    "Free space 8",
    "Free space 9",
    "Free space 10",
    "Free space 11",
    "Free space 12",
    "Free space 13",
    "Free space 14",
    "Free space 15",
    "Free space 16",
    "Free space 17",
    "Free space 18",
    "Free space 19",
    "Free space 20",
    "Free space 21",
    "Free space 22",
    "Free space 23",
    "Free space 24",
    "Free space 25",
    "Free space 26",
    "Free space 27",
    "Free space 28",
    "Free space 29",
    "Free space 30 last",
  ],
};
export default {
  culture,
  random: () => {
    const random = Math.floor(Math.random() * culture.list.length);
    return culture.list[random];
  },
  toString: () => {
    return "Culture";
  },
};
