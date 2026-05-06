
export interface CurrencyAPI{
    result: number;
    query: {
        from: string;
        to: string;
        amount: number;
    }
}