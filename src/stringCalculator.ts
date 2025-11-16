export function stringCalculator(input: string): number {
  if (input === "") return 0;

  const parts = input.split(",");
  const nums = parts.map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}