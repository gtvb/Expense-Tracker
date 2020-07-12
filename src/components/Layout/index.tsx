import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../Header'
import ExpensesArea from '../ExpensesArea'
import ExpenseSubmission from '../ExpenseSubmission'

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <ExpensesArea />
        <ExpenseSubmission />
      </Wrapper>
    </Container>
  );
}

export default Layout;