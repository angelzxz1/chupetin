const penalties = {
  list: {
    general: [
      "1 shot",
      "2 shots",
      "3 shots",
      "1 beer",
      "2 beers",
      "3 beers",
      "1 shot and 1 beer",
      "2 shots and 2 beers",
      "1 shot and 2 beers",
      "2 shots and 1 beer",
      "1 spicy shot",
      "1 spicy shot and 1 beer",
      "1 spicy shot and 2 beers",
      "2 spicy shots",
      "2 spicy shots and 1 beer",
    ],
    rules: [
      "1 shot and a beer or 2 shots",
      "1 shot or 2 beers at once",
      "1 spicy shot and a beer or 2 shots",
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
