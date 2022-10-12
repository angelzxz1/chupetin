const culture = {
  list: [
    "Car brands",
    "Members of the club of the 27",
    "Cocktails names",
    "Musicians starting with the letter A",
    "PC parts",
    "Curse words in your language",
    "Parts of the body that there are only 1",
    "Parts of the body that grow",
    "Names or last name of people in Japanese",
    "Names of the Simpsons characters",
    "Names of the bones of the human body",
    "Name of cities that have beaches",
    "Breeds of dogs",
    "Beer brands",
    "Name of fried foods",
    "Studio ghibli movies",
    "Name a DC comics character",
    "Name a Marver comics character",
    "Sports",
    "means of transport",
    "Parts of a car",
    "Makeup brands",
    "school subjects ",
    "Betting games",
    "name of fruit trees",
    "Blue food, (Blueberries are fkng purple!)",
    "Table games",
    "Customer service answers",
    "Thing moms say",
    "Free space, ask anything!",
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
