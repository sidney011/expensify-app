import ExpensesSum from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const result = ExpensesSum([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = ExpensesSum([expenses[0]]);
  expect(result).toEqual(195);
});

test("should correctly add up multiple expenses", () => {
  const result = ExpensesSum(expenses);
  expect(result).toEqual(5790);
});
