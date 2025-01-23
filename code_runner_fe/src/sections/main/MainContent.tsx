import { SideBar } from "./Sidebar"
import { CodeEditor } from "./CodeEditor"
import { CodeOutput } from "./CodeOutput"

interface IMainContentProps {
  language: string;
  handleLanguageChange: (lang: string) =>  void;
  code: string;
  handleCodeInput: (code: string) => void;
  output: string;
  handleCodeClear: VoidFunction;
  ready: boolean;
}

export const MainContent = ({language, handleLanguageChange, code, handleCodeInput, output, handleCodeClear, ready }:IMainContentProps) => {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <SideBar language={language} handleLanguageChange={handleLanguageChange} />
      <div className="flex-1 flex">
      <CodeEditor code={code} handleCodeInput={handleCodeInput} ready={ready} />
      <CodeOutput output={output} handleClear={handleCodeClear}/>
      </div>
    </div>
  )
}
