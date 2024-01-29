import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';

import USFlag from '@/public/assets/flags/us.jpeg';
import GMFlag from '@/public/assets/flags/german.png';
import LTFlag from '@/public/assets/flags/lithuania.png';
import ITFlag from '@/public/assets/flags/italy.png';
import ESFlag from '@/public/assets/flags/spain.png';
import ELFlag from '@/public/assets/flags/cyprus.png';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const getFlagImage = (languageCode) => {
    switch (languageCode) {
      case 'en':
        return USFlag;
      case 'de':
        return GMFlag;
      case 'lt':
        return LTFlag;
      case 'it':
        return ITFlag;
      case 'es':
        return ESFlag;
      case 'el':
        return ELFlag;
      default:
        return '/assets/flags/default.png'; // Default flag image for unknown languages
    }
  };

  const LanguageOption = ({ value, label }) => (
    <div
      key={value}
      className="flex items-center text-white cursor-pointer hover:bg-white hover:text-primary hover:rounded-md"
      onClick={() => changeLanguage(value)}
    >
      <Image src={getFlagImage(value)} alt={`${label} Flag`} className="inline-block w-4 h-4 mr-2" width={50} height={50} />
      <span className="text-white hover:text-primary">{label}</span>
    </div>
  );

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex justify-between px-[10rem] sm:px-[1rem] pt-2 items-center">
      <div className="text-primary text-lg font-semibold mr-4">{t('chooseLanguage')}</div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text-white flex items-center bg-primary px-4 py-1 text-sm font-medium rounded-md"
        >
          <span>{t(i18n.language)}</span>
          <span className="ml-2"><IoMdArrowDropdown className={`w-6 h-6 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /></span>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-10 right-0 mt-2 bg-primary w-32 hover:text-primary px-2 py-4 rounded-md shadow z-10">
            <LanguageOption value="en" label="English" />
            <LanguageOption value="de" label="German" />
            <LanguageOption value="lt" label="Lithuanian" />
            <LanguageOption value="it" label="Italian" />
            <LanguageOption value="es" label="Spanish" />
            <LanguageOption value="el" label="Greek" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;