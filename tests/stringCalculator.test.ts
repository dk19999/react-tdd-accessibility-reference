import { describe, it, expect } from "vitest";
import { stringCalculator } from "../src/stringCalculator";

describe("stringCalculator", () => {
  it("returns 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("returns the number for a single numeric value", () => {
    expect(stringCalculator("5")).toBe(5);
  });

  it("sums two comma-separated numbers", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("sums an arbitrary amount of comma-separated numbers", () => {
    expect(stringCalculator("1,2,3,4")).toBe(10);
  });

});
