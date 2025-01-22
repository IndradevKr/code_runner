import { LANGUAGES_ICONS } from "../../constants";

interface IHeaderProps {
  language: string;
  handleLanguageChange: (lang: string) => void;
  theme: string;
  handleThemeChange: (themeColor: string) => void;
  handleRun: VoidFunction;
  handleStop: VoidFunction;
}

export const Header = ({
  language,
  handleLanguageChange,
  theme,
  handleThemeChange,
  handleRun,
  handleStop,
}: IHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full"></div>
          <span className="text-lg font-semibold">Code Runner</span>
        </div>
        <div className="flex items-center gap-4">
          <select
            className="bg-gray-800 border border-gray-700 rounded px-2 py-1"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {LANGUAGES_ICONS.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>

          <select
            className="bg-gray-800 border border-gray-700 rounded px-2 py-1"
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
          >
            <option value="Github Light">Github Light</option>
            <option value="Github Dark">Github Dark</option>
          </select>

          <button
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded flex items-center gap-1"
            onClick={handleRun}
          >
            <span className="text-sm">▶</span> Run
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded flex items-center gap-1"
            onClick={handleStop}
          >
            <span className="text-sm">■</span> Stop
          </button>
        </div>
      </div>
    </>
  );
};
