# [Expense Tracker CLI](https://github.com/DarshanParhyar/Expense-Tracker.git)

It's a [beginner-friendly](https://roadmap.sh/projects/expense-tracker) project from the roadmap.sh backend projects.

A simple command-line interface (CLI) application to track and manage your expenses. This application allows users to add, delete, view expenses, and get a summary of their expenses in an easy-to-use terminal interface.

## Project URL

[Expense Tracker CLI GitHub Repository](https://github.com/DarshanParhyar/Expense-Tracker.git)

## Features

- **Add an expense**: Provide a description and amount to record a new expense.
- **Update an existing expense**: Modify an expense description or amount by its ID.
- **Delete an expense**: Remove an expense by its ID.
- **View all expenses**: Display a list of all the recorded expenses.
- **View expense summary**: Get a summary of the total expenses.
- **View monthly expense summary**: Filter and view total expenses for a specific month.

## Prerequisites

- **Node.js** (version 12 or above)
- Basic knowledge of terminal/command line.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DarshanParhyar/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. **Install required dependencies**:
   (No external libraries are required as of now, but if any are added in the future, use `npm install`).

## Usage

### Adding an Expense

To add an expense, provide a description and amount:

```bash
node expenseTracker.js add --description "Lunch" --amount 15
node expenseTracker.js delete --id 1
node expenseTracker.js list
node expenseTracker.js summary
node expenseTracker.js summary --month 8

```

## Contributing

Feel free to submit issues or pull requests if you have any ideas or improvements. Contributions are always welcome!
