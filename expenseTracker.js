const fs = require("fs");
const path = require("path");

const recordExpenseFile = path.join(__dirname, "expenses.json");
if (!fs.existsSync(recordExpenseFile)) {
  fs.writeFileSync(recordExpenseFile, JSON.stringify([]));
  console.log(`file has been created`); // logs
}

function readExpenses() {
  const data = fs.readFileSync(recordExpenseFile, "utf8");
  return JSON.parse(data);
}

function writeExpenses(expenses) {
  fs.writeFileSync(recordExpenseFile, JSON.stringify(expenses, null, 2));
}

function addExpense(description, amount) {
  const expenses = readExpenses();
  const newExpense = {
    id: expenses.length + 1,
    date: new Date().toISOString(),
    description,
    amount: parseFloat(amount),
  };

  expenses.push(newExpense);
  writeExpenses(expenses);
  console.log(`Expense added successfully (ID: ${newExpense.id})`);
}

function deleteExpense(id) {
  const expenses = readExpenses();
  const updatedExpenses = expenses.filter((e) => e.id !== parseInt(id));

  if (expenses.length === updatedExpenses.length) {
    console.log("No expense found with that ID");
    return;
  }

  writeExpenses(updatedExpenses);
  console.log(`Expense with ID ${id} has been deleted.`);
}

function listExpenses() {
  const expenses = readExpenses();

  if (expenses.length === 0) {
    console.log("No expenses found.");
    return;
  }
  console.log("ID  Date       Description  Amount");
  expenses.forEach((expense) => {
    console.log(
      `${expense.id}  ${expense.date.slice(0, 10)}  ${expense.description}  $${
        expense.amount
      }`
    );
  });
}

function showSummary() {
  const expenses = readExpenses();
  const totalAmount = expenses.reduce(
    (sum, expenses) => sum + expenses.amount,
    0
  );
  console.log(`Total expenses: $${totalAmount}`);
}

function showMonthlySummary(month) {
  const expenses = readExpenses();
  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1; // JavaScript months are 0-based
    return expenseMonth === parseInt(month);
  });
  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  console.log(`Total expenses for month ${month}: $${total}`);
}

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    const description = args[1];
    const amount = args[3];
    if (description && amount) {
      addExpense(description, amount);
    } else {
      console.log("Please provide a description and amount.");
    }
    break;
  case "delete":
    const id = args[1];
    if (id) {
      deleteExpense(id);
    } else {
      console.log("Please provide an ID.");
    }
    break;
  case "list":
    listExpenses();
    break;
  case "summary":
    const month = args[1];
    if (month) {
      showMonthlySummary(month);
    } else {
      showSummary();
    }
    break;
  default:
    console.log("Unknown command.");
}
