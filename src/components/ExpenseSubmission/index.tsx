import React, { useContext, ChangeEvent, FormEvent } from 'react';

import { Container, Form, InputElement, AddBtn } from './styles';
import { TransactionsContext } from '../../context/TransactionsContext';

interface IContext {
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent): void;
  inputs: ITransaction
  transactions: ITransaction[]
}

interface ITransaction {
  name: string;
  amount: string;
  type: string;
}

const ExpenseSubmission: React.FC = () => {

  const { inputs, handleInputChange, handleSubmit }: IContext = useContext(TransactionsContext)
  const { name, amount, type } = inputs

  return (
    <Container>
      <Form>
        <h3>Add new transaction</h3>
        <hr />
          <h4>Transaction name</h4>
          <InputElement placeholder='Name' name='name' value={name} onChange={handleInputChange} />
          <h4>Amount</h4>
          <InputElement placeholder='Amount' name='amount' value={amount} onChange={handleInputChange} />
          <InputElement placeholder='Type' name='type' value={type} onChange={handleInputChange} />
          <AddBtn onClick={handleSubmit}>
            Add
          </AddBtn>
      </Form>

    </Container>
  );
}

export default ExpenseSubmission;