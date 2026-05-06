import type { AmountInputProps } from "./AmountInput.types"


function AmountInput({value,  onChange} : AmountInputProps) {

    return (
        
        <div >
            <label>Value: </label>
            <input type="number" className="dark:bg-slate-800 dark:text-white block rounded border-2 px-0 pl-1 py-1" placeholder="0.00" value={value} 
            onChange={(e) => onChange(Number(e.target.value))}/>
        </div>
    );
}

export { AmountInput}
