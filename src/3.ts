// Generating a random math problem
const getRandomProblem = () => {
  // Get a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Get a random operation (+, -, x, /)
  const operator = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];
  
  // Generate the problem
  let problem = `${num1} ${operator} ${num2}`;
  
  // Add parentheses if necessary
  if (operator === 'x' || operator === '/') {
    problem = `(${problem})`;
  }
  
  return problem;
};
