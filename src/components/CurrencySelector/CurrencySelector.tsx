
import type { CurrencySelectorProps } from './CurrencySelector.types';

function CurrencySelector({ currencies, value, valueTo, onChange, onChangeTo }: CurrencySelectorProps) {

    return (
        <>
        <div className="mt-2 ">
            
            <div className="inline">
            <select value={value} onChange={(e) => onChange(e.target.value)} className=" mt-2 rounded border-2 px-2 py-1">
                <option value="">Select</option>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            </div>
            <div className="inline ml-1">
            <label className="">To  </label>
            <select value={valueTo} onChange={(e) => onChangeTo(e.target.value)} className="inline-block mt-2 rounded border-2 px-2 py-1">
                <option value="">Select</option>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            </div>
        </div>
        </>
    )
}

export { CurrencySelector}