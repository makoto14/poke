export const MIN_POKE_ID = 1;
export const MAX_POKE_ID = 800;

const getRandomInt = (): number => {
  const min = Math.ceil(MIN_POKE_ID);
  const max = Math.floor(MAX_POKE_ID);
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomInt;
