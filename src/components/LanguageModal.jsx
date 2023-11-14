// src/components/LanguageModal.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { languageStorageKey } from "../hooks/useTranslation";

const LanguageModal = ({ closeModal }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleSave = () => {
    localStorage.setItem(languageStorageKey, selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">{t("changeLanguage")}</h2>
        <div>
          <button
            className={`${
              selectedLanguage === "my"
                ? "bg-red-700 text-white"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            } font-bold py-2 px-4 rounded opacity-75`}
            onClick={() => handleLanguageClick("my")}
          >
            {t("myanmar")}
          </button>
          <button
            className={`${
              selectedLanguage === "en"
                ? "bg-red-700 text-white"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            } font-bold py-2 px-4 rounded ml-2 opacity-75`}
            onClick={() => handleLanguageClick("en")}
          >
            {t("english")}
          </button>
          {/* Add buttons for other languages if needed */}
        </div>
        <div>
          <button
            className="bg-gray-500 mt-6 ml-20 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            {t("ok")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
