import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesTotal } from '../../components/ExpensesTotal';

test('should correctly render ExpensesTotal with 1 expense', () => {
    const wrapper = shallow(<ExpensesTotal expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesTotal with multiple expenses', () => {
    const wrapper = shallow(<ExpensesTotal expensesCount={23} expensesTotal={23393}/>);
    expect(wrapper).toMatchSnapshot();
});