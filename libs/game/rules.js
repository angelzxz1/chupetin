const rules = {
  list: [
    "The person 5 spots after the host needs to do a gesture, created by the host or suggested by the others, before he or she talks",
    "Change the orientation, everybody take a shot or drink one beer at once, if not, everybody does the penaltie",
    "The selected person need to say a suggested word every time talks for 3 rounds",
    "Roll a dice, the number shown it the amount of people next to the last person that will drink a shot if they dont name a poker card and cannot be repeated",
    "Freespace 1",
    "Freespace 2",
    "Freespace 3",
    "Freespace 4",
    "Freespace 5",
    "Freespace 6 last",
  ],
};
export default {
  rules,
  random: () => {
    const random = Math.floor(Math.random() * rules.list.length);
    return rules.list[random];
  },
  toString: () => {
    return "Rule";
  },
};
