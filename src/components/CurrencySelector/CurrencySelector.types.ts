export interface CurrencySelectorProps {
    currencies: string[];
    value: string;
    valueTo: string;
    onChange: (value: string) => void;
    onChangeTo: (value: string) => void;
}