const isFairDie = faces => {
  const validFaces = [2, 4, 6, 8, 10, 12, 20];
  return validFaces.includes(faces);
}

export const roll = die => {
  if (Number.isInteger(die) && isFairDie(die)) return Math.ceil(Math.random() * die);
  if (Array.isArray(die) && isFairDie(die.length)) return die[Math.floor(Math.random() * die.length)];
  return 'Not a valid die';
}