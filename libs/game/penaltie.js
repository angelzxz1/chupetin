const penalties = {
  list: {
    general: [
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
      "Free space 15 last",
    ],
    rules: [
      "1 shot and a beer or 2 shots",
      "1 shot or 2 beers at once",
      "1 shot with picante or 2 shots",
      "3 shots",
      "3 shots and a beer or 2 shots and  2 beers at once",
    ],
  },
};
export default {
  penalties,
  randomPenaltieGeneral: () => {
    const random = Math.floor(Math.random() * penalties.list.general.length);
    return penalties.list.general[random];
  },
  randomPenaltieRules: () => {
    const random = Math.floor(Math.random() * penalties.list.rules.length);
    return penalties.list.rules[random];
  },
  toString: () => {
    return "Penaltie";
  },
};
