import moment from "moment";
import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expenseReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found ", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "4",
            description: "Sweet",
            amount: 2344,
            createdAt: moment(0),
            note: ""
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, {description: "Sweet", id: "4", amount: 2344, createdAt: moment(0), note: ""}]);
})

test("should edit expense by id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            note: "Steven"
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].note).toEqual("Steven");
});

test("should not edit expense if id not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            note: "Steven"
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})


