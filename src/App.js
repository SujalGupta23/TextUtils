// App.js
import React, { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("dark"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [btnText, setBtnText] = useState("Enable LightMode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [btnText, setBtnText] = useState("Enable DarkMode");
  const changeBtn = () => {
    if (btnText === "Enable DarkMode") {
      setBtnText("Enable LightMode");
    } else {
      setBtnText("Enable DarkMode");
    }
  };

  const toggleMode = () => {
    changeBtn();
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      setBtnText("Enable LightMode");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setBtnText("Enable DarkMode");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<AboutUs mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
