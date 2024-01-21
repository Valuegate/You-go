import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='relative flex pl-[10rem] sm:pl-2 pt-4'>
      <div className='text-primary text-lg font-semibold'>{t('chooseLanguage')}</div>

      <select
        className='text-white bg-primary px-2 py-1 text-sm font-medium right-[10rem] sm:right-[8px]'
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        style={{ position: 'absolute', zIndex: 10 }}
      >
        <option value='en'>English</option>
        <option value='de'>German</option>
        <option value='lt'>Lithuanian</option>
        <option value='it'>Italian</option>
        <option value='es'>Spanish</option>
        <option value='el'>Greek</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;