import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hello = () => {
    const { t } = useTranslation();

  return (
    <div>
      
      <Link to="/">
        <button
          className="bg-red-500 mr-6 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {t("Rev Page")}
        </button>
      </Link>
      {t("Hello fri")}</div>
  )
}

export default Hello