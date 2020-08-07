import { calculateAge } from "../helpers/calculateAge";

describe("Test function calculateAge", () => {
  it("With a valida date", () => {
    expect(calculateAge("2000-01-01")).toBe(20);
  });

  it("With a invalid date", () => {
    expect(() => calculateAge("aaaa")).toThrow();
  });
});
