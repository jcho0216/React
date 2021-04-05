import React, { useState } from "react";
import English from "./ComponentsByLang/components_english/English";
// import Korean from "./ComponentsByLang/components_korean/Korean";
// import { Route } from "react-router-dom";

function App() {
  // const [language, SetLanguage] = useState({
  //   clicked: "false",
  //   language: "Korean",
    
  // });

  // const handleLanguage = () => {
  //   if (language.clicked === 'false') {
  //     SetLanguage({ language: "English", clicked: "true"});
  //   } else if (language.clicked === "true") {
  //     SetLanguage({ language: "Korean", clicked: "false"});
  //   }
  // };

  return (
    <>
      <English />
    </>
  );
}

export default App;
