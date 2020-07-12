import React from 'react'

import GlobalStyle from './styles/GlobalStyles'

import Layout from './components/Layout'

import { TransactionsContextProvider } from './context/TransactionsContext'

export const App = () => {
  return (
    <>
      <TransactionsContextProvider>
         <GlobalStyle />

         <Layout />
      </TransactionsContextProvider>
          
    </>
  );
}

export default App;
