// src/pages/Home.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageModal from "../components/LanguageModal";
import { i18n } from "../hooks/useTranslation"; // Import i18n from useTranslation
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    closeModal();
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={openModal}
      >
        {t("changeLanguage")}
      </button>

      <Link to="/hello">
        <button
          className="bg-red-500 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4"
        >
           {t("Next Page")}
        </button>
      </Link>

      {isModalOpen && <LanguageModal closeModal={closeModal} selectLanguage={changeLanguage} />}

      <div className="font-pacifico mt-7">{t("whatIsLoremIpsum")}</div>
      <div className="mt-9 font-saira-condensed">{t("dummyText")}</div>
    </div>
  );
};

export default Home;
