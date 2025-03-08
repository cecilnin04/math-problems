const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const solveMathProblem = (problem) => {
  const numbers = problem.split(' ');
  const operator = numbers[1];
  const num1 = parseInt(numbers[0]);
  const num2 = parseInt(numbers[2]);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  return result;
}

const generateMathProblem = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = ['+', '-', '*', '/'][getRandomNumber() % 4];

  return `${num1} ${operator} ${num2}`;
}

console.log(solveMathProblem(generateMathProblem()));
