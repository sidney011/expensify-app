import React from "react";
import { shallow } from "enzyme";
import ExpenseListItems from "../../components/ExpenseListItems";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItems with data", () => {
  const wrapper = shallow(<ExpenseListItems {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
