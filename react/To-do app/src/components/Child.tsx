type Props = {
    inputValue: string;
    setInputValue: (value: string) => void
}

export default function Child({ inputValue, setInputValue}: Props) {
    return(
        <div>
            <input
                type="text"
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder= "Enter new todo:" 
            />
        </div>
    )
}