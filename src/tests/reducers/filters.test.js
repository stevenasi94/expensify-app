import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filters values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test ("should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    };
    const action = { type: "SORT_BY_DATE" };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test ("should set text filter", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    };
    const action = { type: "SET_TEXT_FILTER", text: "Steven" };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe("Steven");
});

test ("should set start date filter", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    };
    const action = { type: "SET_START_DATE", startDate: 1000 };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toBe(1000);
});

test ("should set end date filter", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    };
    const action = { type: "SET_END_DATE", endDate: -1000 };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(-1000);
});

