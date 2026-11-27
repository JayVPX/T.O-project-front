export const isValidCPF = (number: string): boolean => {
  let sum: number;
  let rest: number;
  sum = 0;
  if (
    !number ||
    number.length !== 11 ||
    number === "00000000000" ||
    number === "11111111111" ||
    number === "22222222222" ||
    number === "33333333333" ||
    number === "44444444444" ||
    number === "55555555555" ||
    number === "66666666666" ||
    number === "77777777777" ||
    number === "88888888888" ||
    number === "99999999999"
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(number.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(number.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(number.substring(10, 11))) return false;
  return true;
};
