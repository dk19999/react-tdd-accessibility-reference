export function stringCalculator(input: string): number {
  if (input === "") return 0;

  const normalized = input.replace(/\n/g, ",");
  const parts = normalized.split(",");
  const nums = parts.map((p) => {
  const n = Number(p);
  if (Number.isNaN(n)) {
    throw new Error("Invalid input");
  }
  return n;
  });
  return nums.reduce((sum, n) => sum + n, 0);
}