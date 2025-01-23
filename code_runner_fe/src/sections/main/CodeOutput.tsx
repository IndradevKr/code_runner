interface ICodeOutputProps {
  handleClear: VoidFunction;
  output: string;
  theme: string;
}

export const CodeOutput = ({output, handleClear, theme}: ICodeOutputProps) => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <span className="text-gray-400">Output:</span>
        <button 
        className="text-blue-400 hover:text-blue-300 text-sm"
        onClick={handleClear}
        >
        CLEAR
        </button>
      </div>
      <div className={`${theme === "Github Light" ? "bg-white text-gray-700" : "bg-gray-900 text-gray-400"} p-4 h-[calc(100%-3rem)] overflow-auto`}>
        {output}
      </div>
    </div>
  )
}
