import { useEffect, useState } from 'react';
import './codeRunner.css'
import { Header } from './sections/header';
import { MainContent } from './sections/main';
import { useWebSocket } from './hooks/useWebSocket';

const CodeRunner = () =>  {
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState('Github Dark');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const {response, sendMessage, ready} = useWebSocket("wss://compiler.skillshikshya.com/ws/compiler/");

  const handleThemeChange = (themeColor: string) => {
    setTheme(themeColor);
  }

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  }

  const handleCodeInput = (codeVal: string) => {
    setCode(codeVal);
  }

  const handleCodeClear = () => {
    setOutput('');
  }

  const handleStop = () => {
    sendMessage(
      {
        "command": "stop"
      }
    )
  }

  const handleRun = () => {
    sendMessage({
      command: "run",
      code: code,
      language: language,
    });
  }

  const headerProps = {
    language,
    handleLanguageChange,
    theme,
    handleThemeChange,
    handleRun,
    handleStop
  }

  const mainContentProps = {
    language,
    handleLanguageChange,
    code,
    handleCodeInput,
    output,
    handleCodeClear,
    ready,
    theme
  }

  useEffect(() => {
    if(response) {
      setOutput(response.data ?? '');
    }
    return () => {
      setOutput('');
    }
  }, [response])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <Header {...headerProps} />
    <MainContent {...mainContentProps} />
    </div>
  )
}

export default CodeRunner;
