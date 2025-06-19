
import './App.css'
import InputCo from './assets/components/InputCo'
import { useState } from 'react';


function App() {
 
const[amount, setAmount] = useState(0);
const[from, setFrom] = useState('USD');
const[to, setTo] = useState('EUR');
const[convertedAmount, setConvertedAmount] = useState(0);

const currencyInfo= UseCurrency(from);

   return (
    <main className="app-container">
      <h1>Hello</h1>
    <InputCo/>
    </main>
  )
}

export default App
