import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log(`Language changed to: ${event.target.value}`);
    // You can integrate translation libraries here like react-i18next to change content dynamically
  };

  return (
    <div className="language-dropdown nav_link">
      <label htmlFor="language-selector">Select Language: </label>
      <select
        id="language-selector"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="dropdown"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
