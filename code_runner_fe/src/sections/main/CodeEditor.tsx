interface ICodeEditorProps {
  code: string;
  handleCodeInput: (code: string) => void;
}

export const CodeEditor = ({ code, handleCodeInput }: ICodeEditorProps) => {
  return (
    <div className="flex-1 border-r border-gray-700">
      <div className="flex items-center px-4 py-2 border-b border-gray-700">
        <span className="text-gray-400">Status:</span>
        <div className="flex items-center gap-2 px-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
      </div>
      <textarea
        className="w-full h-[calc(100%-3rem)] bg-gray-900 p-4 resize-none focus:outline-none"
        value={code}
        onChange={(e) => handleCodeInput(e.target.value)}
        placeholder="Write your code here..."
      />
    </div>
  );
};
