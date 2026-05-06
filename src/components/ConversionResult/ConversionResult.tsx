import { useState } from "react";
import { useFetchRates } from "../../hooks/useFetchRates";
import type { FetchRatesProps } from "../../types/Conversion";
import type { CurrencyAPI } from "../../types/CurrencyAPI";

function ConversionResult({fromCurrency, toCurrency, amount}: FetchRatesProps) {


    const [result, setResult] = useState<CurrencyAPI>();

  return (
    <div>
        <button className="border-2 rounded-md text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-950 px-1 py-1 pl-16 pr-16 mt-2" 
        onClick={() => useFetchRates(
          { fromCurrency,toCurrency,amount}).then((data)=> { 
            setResult(undefined);
            setResult(data);

          })}> Convert</button>
        <h3 className="rounded-md text-center text-2xl text-white bg-purple-700 py-1 block mt-2">{result?.result.toFixed(2) ?? "..."} {toCurrency} </h3>
    </div>

  );
}

export { ConversionResult };