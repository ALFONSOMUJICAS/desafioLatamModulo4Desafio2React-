import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./views/Home.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
// import LoginPage from "./views/LoginPage.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {/* <Home /> */}
        <RegisterPage />
        {/* <LoginPage /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
