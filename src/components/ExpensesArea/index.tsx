import React, { useContext, useState, useEffect } from 'react';

import { Container, BalanceArea, BalanceValue, BalanceTable, IncomeSide, ExpenseSide, ExpensesList, DeleteBtn, ExpenseItem } from './styles';

import { TransactionsContext } from '../../context/TransactionsContext'

interface IContext {
  transactions: ITransaction[];
  handleDelete(name: string): void;
}

interface ITransaction {
  name: string;
  amount: string;
  type: string
}

const ExpensesArea: React.FC = () => {

  const { transactions, handleDelete }: IContext = useContext(TransactionsContext)
  const [incomes, setIncomes] = useState<number>(0)
  const [expenses, setExpenses] = useState<number>(0)
  const [balance, setBalance] = useState<number>(0)
  const [signal, setSignal] = useState<string>('')

  useEffect(() => {
    const expenses = transactions.filter(transaction => (transaction.type).toLowerCase() === 'expense')
    const expensesAmounts = expenses.map(expense => parseInt(expense.amount))

    const incomes = transactions.filter(transaction => (transaction.type).toLowerCase() === 'income')
    const incomesAmounts = incomes.map(income => parseInt(income.amount))

    if(expensesAmounts.length > 0 && incomesAmounts.length === 0) {

      const totalExpenses = expensesAmounts.reduce((acc, cur) => acc + cur)

      setExpenses(totalExpenses)
      setSignal('-')
      setBalance(totalExpenses)

    } else if(incomesAmounts.length > 0 && expensesAmounts.length === 0) {
      const totalIncomes = incomesAmounts.reduce((acc, cur) => acc + cur)

      setIncomes(totalIncomes)
      setSignal('+')
      setBalance(totalIncomes)

    } else if(transactions.length === 0) {
      return;

    } else {

      const totalExpenses = expensesAmounts.reduce((acc, cur) => acc + cur)
      const totalIncomes = incomesAmounts.reduce((acc, cur) => acc + cur)

      totalIncomes > totalExpenses ? setSignal('+') : setSignal('-')
      totalExpenses + totalIncomes === 0 && setSignal('')

      setIncomes(totalIncomes)
      setExpenses(totalExpenses)
      setBalance(totalIncomes - totalExpenses)
    }

  }, [transactions])

  return (
    <Container>
      <BalanceArea>
        <BalanceValue>
          <h2>Your Balance:</h2>
          <h1>$ {signal}{balance}</h1>
        </BalanceValue>
        
        <BalanceTable>
          <IncomeSide>
            <h2>Income</h2>
            <h1>$ {incomes}</h1>
          </IncomeSide>

          <hr></hr>

          <ExpenseSide>
            <h2>Expense</h2>
            <h1>$ {expenses}</h1>
          </ExpenseSide>
        </BalanceTable>
      </BalanceArea>

      <ExpensesList>
        <h3>History</h3>
        <hr />
          { transactions.map(transaction => (
            <ExpenseItem type={(transaction.type).toLowerCase() === 'expense' ? 'expense' : 'income'}
                key={`${transaction.name}-${transaction.amount}`} 
            >
              <p>{ transaction.name }</p>
              <p>$ { transaction.amount }</p>
              <DeleteBtn onClick={() => handleDelete(transaction.name)}>X</DeleteBtn>
            </ExpenseItem>
          )) }
      </ExpensesList>
    </Container>
  );
}

export default ExpensesArea;
