import { useState } from "react";
import { useFetchRates } from "../../hooks/useFetchRates";
import type { FetchRatesProps } from "../../types/Conversion";
import type { CurrencyAPI } from "../../types/CurrencyAPI";

function ConversionResult({fromCurrency, toCurrency, amount}: FetchRatesProps) {


    const [result, setResult] = useState<CurrencyAPI>();
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
        <button
          className="border-2 rounded-md dark:border-gray-800 text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-950 px-1 py-1 pl-16 pr-16 mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isLoading}
          onClick={() => {
            if(amount <= 0) {
                alert("Please enter a valid amount greater than 0.");
                return;
            }
            if(!fromCurrency || !toCurrency) {
                alert("Please select both currencies to convert.");
                return;
            }
            if(fromCurrency === toCurrency) {
                alert("Please select different currencies to convert.");
                return;
            }
            setIsLoading(true);
            setResult(undefined);
            useFetchRates({ fromCurrency, toCurrency, amount })
              .then((data) => {
                setResult(data);
              })
              .catch((error) => {
                alert("An error occurred while fetching the conversion rate. Please try again.");
                setResult(undefined);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}>
          {isLoading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          Convert
        </button>
        <h3 className="rounded-md text-center text-2xl dark:border-gray-800 text-white bg-purple-700 py-1 block mt-2">{result?.result.toFixed(2) ?? "..."} {toCurrency}</h3>
    </div>

  );
}

export { ConversionResult };