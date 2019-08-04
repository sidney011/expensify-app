import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if ID not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "Random",
      note: "",
      amount: 295,
      createdAt: 9080
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            note: "Hello"
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([{...expenses[0], ...action.updates}, expenses[1], expenses[2]])
});

test('should not edit an expense if expense not found', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            note: "Hello"
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

