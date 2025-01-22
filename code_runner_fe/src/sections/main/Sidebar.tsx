
interface ISideBarProps {
  language: string;
  handleLanguageChange: (lang: string) => void;
} 

const languages = [
  { id: 'python', icon: 'P', color: 'bg-blue-500' },
  { id: 'html', icon: 'H', color: 'bg-orange-500' },
  { id: 'javascript', icon: 'JS', color: 'bg-yellow-500' },
  { id: 'angular', icon: 'A', color: 'bg-red-500' },
  { id: 'c', icon: 'C', color: 'bg-blue-400' },
  { id: 'assembly', icon: '@', color: 'bg-gray-500' },
  { id: 'php', icon: 'P', color: 'bg-purple-500' },
];

export const SideBar = ({language, handleLanguageChange}: ISideBarProps) => {
  return (
    <div className="w-12 bg-gray-800 border-r border-gray-700">
    <div className="flex flex-col items-center py-2 gap-4">
      {languages.map(lang => (
        <button
          key={lang.id}
          onClick={(e) =>{ 
            e.stopPropagation()
            handleLanguageChange(lang.id)}}
          className={`w-8 h-8 ${lang.color} rounded flex items-center justify-center 
            cursor-pointer transition-transform hover:scale-110
            ${language === lang.id ? 'ring-2 ring-white' : ''}`}
        >
          {lang.icon}
        </button>
      ))}
    </div>
  </div>
  )
}
