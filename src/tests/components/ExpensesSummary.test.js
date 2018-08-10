import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummery } from "../../components/ExpenseSummary";

test("should correctly render ExpenseSummery with 1 expense", () => {
    const wrapper = shallow(<ExpenseSummery expenseCount={1} expenseTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpenseSummery with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummery expenseCount={23} expenseTotal={235123408987}/>);
    expect(wrapper).toMatchSnapshot();
});

