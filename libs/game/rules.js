const rules = {
	toString: () => {
		return "Rule";
	},
	list: {
		rules: [
			"The person 5 spots after the host needs to do a gesture, created by the host or suggested by the others, before he or she talks",
			"Change the orientation, everybody take a shot or drink one beer at once, if not, everybody does the penaltie",
			"The selected person need to say a suggested word every time talks for 3 rounds",
			"Roll a dice, the number shown it the amount of people next to the last person that will drink a shot if they dont name a poker card and cannot be repeated",
			"Freespace 1",
			"Freespace 2",
			"Freespace 3",
			"Freespace 4",
			"Freespace 5",
			"Freespace 6 last"
		],
		punishments: [
			"1 shot and a beer or 2 shots",
			"1 shot or 2 beers at once",
			"1 shot with picante or 2 shots",
			"3 shots",
			"3 shots and a beer or 2 shots and  2 beers at once"
		]
	}
};
export default rules;
