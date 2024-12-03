import { useState } from "react";

// components
import AboutTab from "./tabs/AboutTab";
import ContactTab from "./tabs/ContactTab";
import MainTab from "./tabs/MainTab";
import WebDevTab from "./tabs/WebDevTab";

// styling
import "./App.css";

function App() {
  const [tabArr, setTabArr] = useState([MainTab]);

  function openTab(type) {
    setTabArr([...tabArr, type]);
  }

  return (
    <div className="app">
      {tabArr.map((tab, index) => {
        const TabName = tab;
        return <TabName key={index} openTab={openTab} AboutTab={AboutTab} />;
      })}
    </div>
  );
}

export default App;
