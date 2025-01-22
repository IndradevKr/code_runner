import { LANGUAGES_ICONS } from "../../constants";

interface ISideBarProps {
  language: string;
  handleLanguageChange: (lang: string) => void;
}

export const SideBar = ({ language, handleLanguageChange }: ISideBarProps) => {
  return (
    <div className="w-12 bg-gray-800 border-r border-gray-700">
      <div className="flex flex-col items-center py-2 gap-4">
        {LANGUAGES_ICONS.map((lang) => (
          <div className="relative group">
            <button
              key={lang.id}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageChange(lang.id);
              }}
              className={`w-8 h-8 rounded flex items-center justify-center p-1
            cursor-pointer transition-transform hover:scale-110 hover:bg-gray-600
            ${language === lang.id ? "ring-2 bg-gray-600" : ""}`}
            >
              {lang.icon}
            </button>
            <div
              className="absolute top-1/2 left-full transform
                                   -translate-y-1/2 translate-x-2 w-max
                                   px-2 py-1 text-sm text-white bg-gray-700
                                   rounded shadow-lg opacity-0
                                   group-hover:opacity-100"
            >
              {lang.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
