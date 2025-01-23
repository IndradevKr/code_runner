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
  theme: string;
}

export const MainContent = ({language, handleLanguageChange, code, handleCodeInput, output, handleCodeClear, ready, theme }:IMainContentProps) => {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <SideBar language={language} handleLanguageChange={handleLanguageChange} />
      <div className="flex-1 flex">
      <CodeEditor code={code} handleCodeInput={handleCodeInput} ready={ready} theme={theme} />
      <CodeOutput output={output} handleClear={handleCodeClear} theme={theme} />
      </div>
    </div>
  )
}
