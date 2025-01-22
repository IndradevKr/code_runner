import { useState } from 'react';
import './codeRunner.css'
import { Header } from './sections/header';
import { MainContent } from './sections/main';

const CodeRunner = () =>  {
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState('Github Light');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

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
    console.log("stop clicked.")
  }

  const handleRun = () => {
    console.log("run clicked");
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
    handleCodeClear
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <Header {...headerProps} />
    <MainContent {...mainContentProps} />
    </div>
  )
}

export default CodeRunner;
