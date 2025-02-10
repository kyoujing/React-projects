import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import "./styles/App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
    </Router>
  );
}

export default App;