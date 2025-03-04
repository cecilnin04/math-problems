import { getRandomInt } from 'crypto';

const randomTSCode = () => {
  const min = 1000;
  const max = 9999;
  return getRandomInt(min, max).toString();
};
export default randomTSCode;