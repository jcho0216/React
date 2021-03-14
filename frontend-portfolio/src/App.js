import React, { useState } from "react";
import English from "./ComponentsByLang/components_english/English";
import Korean from "./ComponentsByLang/components_korean/Korean";
import { Route } from "react-router-dom";

function App() {
  const [language, SetLanguage] = useState({
    clicked: null,
    language: "English",
    address: "eng",
  });

  const handleLanguage = () => {
    if (language.clicked === null) {
      SetLanguage({ language: "Korean", clicked: "true", address: "/eng" });
    } else if (language.clicked === "false") {
      SetLanguage({ language: "Korean", clicked: "true", address: "/kor" });
    } else if (language.clicked === "true") {
      SetLanguage({ language: "English", clicked: "false", address: "eng" });
    }
  };

  return (
    <>
      <button onClick={handleLanguage}>{language.language}</button>
      {language.address === "eng" ? (
        <Route path={language.address} component={English} exact/>
      ) : (
        <Route path={language.address} component={Korean} />
      )}
    </>
  );
}

export default App;
