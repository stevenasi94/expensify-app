import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpensesListItem";
import selectedExpense from "../selectors/expenses";
import ExpensesListFilters from "./ExpenseListFilters";

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
            })
        )
    }
</div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpense(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);