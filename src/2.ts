import { Random } from 'random-js';

const rand = new Random();

function getRandomTsCode() {
  const num1 = rand.nextInt(0, 10);
  const num2 = rand.nextInt(0, 10);
  const operator = rand.nextBoolean() ? '+' : '-';
  return `const result = ${num1} ${operator} ${num2};`;
}
