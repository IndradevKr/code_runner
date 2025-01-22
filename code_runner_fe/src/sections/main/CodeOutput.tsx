interface ICodeOutputProps {
  handleClear: VoidFunction;
  output: string;
}

export const CodeOutput = ({output, handleClear}: ICodeOutputProps) => {
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
      <div className="p-4 h-[calc(100%-3rem)] overflow-auto">
        {output}
      </div>
    </div>
  )
}
