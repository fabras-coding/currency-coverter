interface SwapButtonProps {
    valuefrom: string;
    valueTo: string;
    onClick: (valueFrom: string, valueTo: string) => void;
}

function SwapButton({ valuefrom, valueTo, onClick }: SwapButtonProps) {
    return (
        
        <button onClick={() => onClick(valuefrom, valueTo)} 
        className="border-2 rounded-md text-white bg-purple-700 mt-4 pl-12 pr-11 px-1 py-1" >🔄️ Swap 🔄️</button>

    );
}

export { SwapButton };
