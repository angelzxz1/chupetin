const questions = {
  list: [
    "What's the capital of india? - Delhi",
    "What geometric shape is generally used for stop signs? - Octagon",
    "What is 'cynophobia'? - Fear of dogs",
    "What is the name of the biggest technology company in South Korea? - Samsung",
    "Who was the first woman to win a Nobel Prize (in 1903)? - Marie Curie",
    "What is the name of the largest ocean on earth? - Pacific Ocean",
    "Who was the first woman pilot to fly solo across the Atlantic? - Amelia Earhart",
    "What is the rarest M&M color? - Brown",
    "Which country consumes the most chocolate per capita? - Switzerland",
    "What was the first soft drink in space? - Coca-Cola",
    "What is the most consumed manufactured drink in the world? - Tea",
    "Which is the only edible food that never goes bad? - Honey",
    "Which country invented ice cream? - China",
    "What was the first feature-length animated movie ever released? (Hint: It was a Disney Movie) - Snow White and the Seven Dwarfs",
    "Who created Sherlock Holmes? - Sir Arthur Conan Doyle",
    "Which member of the Beatles married Yoko Ono? - John Lennon",
    "What sport is dubbed the 'king of sports'? - Soccer",
    "What is Earth's largest continent? - Asia",
    "What's the smallest country in the world? - Vatican City",
    "What's the city with the most diversity in terms of language? - New York City",
    "What country has the most natural lakes? - Canada",
    "How many hearts does an octopus have? - Three",
    "The unicorn is the national animal of which country? - Scotland",
    "The name of which African animal means 'river horse'? - Hippopotamus",
    "In what type of matter are atoms most tightly packed? - Solids",
    "What is the hottest planet in the solar system? - Venus",
    "What is the opposite of matter? - Anti-matter",
    "How many teeth does an adult human have? - 32",
    "In the state of Georgia, it’s illegal to eat what with a fork? - Fried chicken",
    "Who invented the word 'vomit'? - William Shakespeare",
  ],
};
export default {
  questions,
  random: () => {
    const random = Math.floor(Math.random() * questions.list.length);
    return questions.list[random];
  },
  toString: () => {
    return "Question";
  },
};
