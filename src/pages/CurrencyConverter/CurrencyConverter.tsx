import React, { useState } from "react";
import { AmountInput } from "../../components/AmountInput/AmountInput";
import { CurrencySelector } from "../../components/CurrencySelector/CurrencySelector";
import { SwapButton } from "../../components/CurrencySwapper/CurrencySwapper";
import { ConversionResult } from "../../components/ConversionResult/ConversionResult";


export default function CurrencyConverter() {

    const currencies = ["USD", "EUR", "BRL", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"];
    const [selectedFromCurrency, setSelectedFromCurrency] = useState<string>("");
    const [selectedToCurrency, setSelectedToCurrency] = useState<string>("");
    const[amount, setAmount] = useState<number>(0);


    function swapValues(valueFrom: string, valueTo: string) {

        setSelectedFromCurrency(valueTo);
        setSelectedToCurrency(valueFrom);
    }


    return (
        <div>
            
            <div className="flex flex-col gap-3 items-center md:items-start">
                <AmountInput value={amount} onChange={setAmount}/>
                
                <CurrencySelector currencies={currencies} value={selectedFromCurrency} valueTo={selectedToCurrency}
                 onChange={setSelectedFromCurrency} onChangeTo={setSelectedToCurrency} />

                <SwapButton valuefrom={selectedFromCurrency} valueTo={selectedToCurrency} onClick={swapValues}/>
                <ConversionResult fromCurrency={selectedFromCurrency} toCurrency={selectedToCurrency} amount={amount}/>
                 
            </div>
            

        </div>
    );
}