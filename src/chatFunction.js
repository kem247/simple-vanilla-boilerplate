// export default (a, b) => {
//   return a + b;
// };

export default async input => {
  let response = "Yeah, that's a no!";
  if (input === "Where are your located?") {
    response = "Starcourt mall, Hawkins Indiana";
  } else if (input === "What did you think about kids?") {
    const responses = [
      "Turns out I'm a pretty good babysitter",
      "Man kids are the worst! Who needs 'em anyways! "
    ];
    response = Math.floor(Math.random() * responses.length);
  }
  return response;
};
