/**
 * This function adds all the arguments and is used purely to experiment with Jest
 * @param args  array of numbers
 * @returns     sum of the numbers
 */
export default function add(...args: number[]) {
  return args.reduce((acc, value) => acc + value, 0) || 0
}