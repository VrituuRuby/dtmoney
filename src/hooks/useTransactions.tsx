import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

interface Transaction{
    //this is the interface api uses to list all transactions
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionInput{
    //this is the input from user when creating new transaction
    title: string,
    type: string,
    category: string,
    amount: number,
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])
    
    async function createTransaction(transactionInput: TransactionInput) {      
        const response = await api.post('/transactions', transactionInput);
        const  { transaction } = response.data;

        setTransactions([...transactions, 
            {
                ...transaction,
                createdAt: new Date()
            }
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}