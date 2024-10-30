import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-5 rounded-lg flex ${className}`}>
      <div className="w-1/2 outline-none bg-transparent">
        <label htmlFor={id} className="text-sm text-gray-400 font-medium">{label}</label>
        <input
          id={id}
          type="number"
          className="border-none flex flex-wrap text-left justify-start"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 justify-end text-right">
        <p className="text-sm text-gray-400 font-medium">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
    </div>
  );
}

export default InputBox;
