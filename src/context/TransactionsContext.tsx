import React, { createContext, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TransactionsContext = createContext<IContext>({ 
  inputs: {name: '', amount: '', type: ''}, 
  handleSubmit: () => {}, 
  handleDelete: () => {},
  handleInputChange: () => {},
  transactions: []
})

interface IContext {
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleDelete(id: string): void;
  handleSubmit(e: FormEvent): void;
  inputs: ITransaction
  transactions: ITransaction[]
}

interface ITransaction {
  name: string;
  amount: string;
  type: string;
}

export const TransactionsContextProvider: React.FC = ({ children }) => {

  const notifyDeletion = () => toast.success('Success! Refresh the page to see your changes.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const notifyError = () => toast.error('Please fill all the fiels correctly.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  
  const [transactions, setTransactions] = useState<ITransaction[]>(() => {
    const storagedData = localStorage.getItem('Transactions')

    return storagedData ? JSON.parse(storagedData) : []
  })
  const [inputs, setInputs] = useState<ITransaction>({
    name: '',
    amount: '',
    type: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputs({...inputs, [name]: value })
  }

  const handleDelete = (name: string) => {
    const currentArray = transactions

    const filtered = currentArray.filter(item => item.name !== name)

    setTransactions(filtered)

    notifyDeletion()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const { name, amount, type } = inputs

    if(name === '' || type === '' || amount === '') {
      notifyError()
    } else {
      setTransactions([...transactions, inputs])
    }   
  }

  useEffect(() => {
    localStorage.setItem('Transactions', JSON.stringify(transactions))
  }, [transactions])

  return (
    <TransactionsContext.Provider value={{ transactions, handleInputChange, handleDelete, handleSubmit , inputs }}>
        {children}
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </TransactionsContext.Provider>
  )
}