
import React from 'react';
function InputCo({
label,
amount,
onAmountChange,
onCurrencyChange,
currencyOptions=[],
selectCurrency='USD',
amountDisable=false,
className="",

}) {
  return (
<>
  <div className={className}>
    <input type="text" placeholder={label}  value={amount} className='input-field'
    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
    <select value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
    {currencyOptions.map((currency)=>(
      <option key={currency} value={currency}>{currency}</option>))}
      </select>

    </div>
  </>
  )
}

export default InputCo;
