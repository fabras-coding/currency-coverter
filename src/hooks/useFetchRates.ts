import type { FetchRatesProps } from "../types/Conversion";
import type { CurrencyAPI } from "../types/CurrencyAPI";


const apiKey = "a8f28a3efd5d4e34740577d4687bb2c7"; //don't worry, this is a free API key for testing purposes ;)
const apiURL = "https://api.exchangerate.host";

//https://api.exchangerate.host/convert?access_key=a8f28a3efd5d4e34740577d4687bb2c7&from=USD&to=BRL&amount=100

export function useFetchRates({ fromCurrency, toCurrency, amount }: FetchRatesProps) {


    const endpoint = `${apiURL}/convert?access_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

    const request = fetch(endpoint);
    request.catch((error) => {
        console.error("Network error while fetching exchange rates:", error);
        throw error;
    });
    const resp : Promise<CurrencyAPI> = request.then((res) => res.json());

    return resp;



}