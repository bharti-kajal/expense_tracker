import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    //add logic for updating the expense here
    case "UPDATE_EXPENSE": {
      return {
        expenses: state.expenses.map((expense) =>
          expense.id === payload.expense.id ? payload.expense : expense
        )
      };
    }
    default:
      return state;
  }
};
// Use proper state management for populating the form in the expenseForm component on clicking the edit icon in the Transaction component
function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [editingExpense, setEditingExpense] = useState(null); // state for editing

  const addExpense = (expense) => {
    if (editingExpense) {
      dispatch({ type: "UPDATE_EXPENSE", payload: { expense } });
      setEditingExpense(null);
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: { expense } });
      setEditingExpense(null);
    }
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const editExpense = (expense) => {
    setEditingExpense(expense); // set the expense to be edited
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
          addExpense={addExpense} 
          editingExpense={editingExpense} // pass the expense being edited
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense} // pass editExpense function
          />
        </div>
      </div>
    </>
  );
}

export default App;
