import React from 'react';
import { ChevronLeft } from 'lucide-react'; // Ensure lucide-react is installed

export type SupportedLanguage = 'en' | 'ko' | 'ja' | 'zh' | 'es';

export interface NavbarProps {
  /** Current active language code */
  lang: SupportedLanguage;
  /** Callback triggered when a new language is selected from the dropdown */
  onLangChange: (lang: SupportedLanguage) => void;
  /** Callback triggered when the back button is clicked */
  onBackClick: () => void;
  /** Localization object for passing button text dynamically */
  translations?: {
    back: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLangChange,
  onBackClick,
  translations = { back: 'Back' }, // Safe fallback default
}) => {
  const languages: SupportedLanguage[] = ['en', 'ko', 'ja', 'zh', 'es'];

  return (
    <nav className="h-16 px-8 flex items-center justify-between border-b bg-gray-50 sticky top-0 z-50 w-full">
      {/* Navigation Actions */}
      <button 
        onClick={onBackClick} 
        className="flex items-center gap-2 text-gray-600 hover:text-black font-bold focus:outline-none transition-colors"
      >
        <ChevronLeft size={20} /> {translations.back}
      </button>
      
      {/* Controlled Language Switcher Dropdown */}
      <div>
        <select
          value={lang}
          onChange={(e) => onLangChange(e.target.value as SupportedLanguage)}
          className="px-3 py-1.5 text-xs rounded border border-gray-300 bg-white text-gray-700 outline-none focus:border-[#001529] focus:ring-1 focus:ring-[#001529] font-medium cursor-pointer transition-all"
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </div>        
    </nav>
  );
};
