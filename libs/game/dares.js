import { Grid } from "@chakra-ui/react";

const dares = {
  list_t: [
    "Read out the last dirty text you sent",
    "Show the most embarrassing photo on your phone",
    "Show the last five people you texted and what the messages said",
    "Let the rest of the group DM someone from your Instagram account",
    "Let the group look in your Instagram DMs",
    "Say something dirty to the person on your left",
    "Give a lap dance to someone of your choice",
    "Repeat everything the person on your right is saying until it's your turn again",
    "Remove four items of clothing",
    "Like the first 15 posts on your Facebook newsfeed",
    "Eat a spoonful of mustard",
    "Show your orgasm face",
    "Seductively eat a banana",
    "Do your best sexy crawl",
    "Eat a snack without using your hands",
    "Twerk for a minute",
    "Try to put your whole fist in your mouth",
    "Try to lick your elbow",
    "Talk in an Indian accent for the rest of the evening",
    "Do your best celebrity impression",
    "Play air guitar for 2 minutes straight",
    "Post the oldest selfie on your phone on Instagram Stories",
    "Dance without music for two minutes",
    "Pole dance with an imaginary pole",
    "Scroll through your phone book until someone says stop. Call or delete that person.",
    "Put your clothing on backwards for the rest of the evening",
    "Try and make yourself cry in front of the group",
    "Attempt the first TikTok dance on your for you page",
    "Call the first person in your phonebook and howl like a wolf",
    "Do a Facebook Live and say everything your friends tell you to",
    "Update your relationship status to 'engaged' on Facebook",
  ],
  list_d: [
    "When was the last time you cried?",
    "Who's the last person you searched on Instagram?",
    "What's something you're glad your family doesn't know about you?",
    "What's your relationship dealbreaker?",
    "What's a secret you've never told anyone?",
    "What's the worst intimate experience you've ever had?",
    "What's the most embarrassing thing you've ever done?",
    "What's the most disgusting thing you've ever done?",
    "Who would you like to kiss in this room?",
    "Have you ever had a run in with the law?",
    "What's the most embarrassing thing you've done in a taxi?",
    "Have you ever peed in the shower?",
    "Have you ever been caught doing something you shouldn't have?",
    "What's the worst date you've been on?",
    "Have you ever said something you regret about someone in this room?",
    "Where's the weirdest place you've had sex?",
    "Why did your last relationship break down?",
    "Have you ever lied to get out of a bad date?",
    "Have you ever returned or re-gifted a present?",
    "If you had to get back with an ex, who would you choose?",
    "If you had to cut one friend out of your life, who would it be?",
    "What's a rumour that's true?",
    "What's your biggest turn on?",
    "What's your favourite gross food combination?",
    "If you could swap lives with someone in this room, who wouldn't it be?",
    "What was the most inappropriate time you farted?",
    "What's something you really hope your family never finds out about?",
    "Do you have any fake social media accounts?",
    "Who do you think is the worst-dressed person in this room?",
    "Have you ever practised kissing in a mirror?",
    "Have you ever told a lie about your BFF to make yourself look better?",
  ],
};
export default {
  dares,
  random: () => {
    const random1 = Math.floor(Math.random() * dares.list_t.length);
    const random2 = Math.floor(Math.random() * dares.list_d.length);
    return (
      <>
        <Grid justifyContent="center" alignItems="center" textAlign="center">
          {dares.list_d[random1]}
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          - or -
        </Grid>
        <Grid justifyContent="center" alignItems="center" textAlign="center">
          {dares.list_t[random2]}
        </Grid>
      </>
    );
  },
  toString: () => {
    return "Truth or Dare";
  },
};
