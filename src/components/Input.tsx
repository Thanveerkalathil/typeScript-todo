
type Input ={
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    type: "text" | "checkbox" | "color"
}
const Input = ({inputValue,setInputValue,type}:Input) => {
  return (
    <div>
      <input
            value={inputValue}
            type={type}
            className="w-full p-2 rounded-sm mb-2"
            onChange={(e) => setInputValue(e.target.value)}
          />
    </div>
  )
}

export default Input
