import React from "react";
import "./styles/main.css"
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Thematic} from "./components/Thematic";
import {Whyget} from "./components/Whyget";
import {Future} from "./components/Future";
import {Faq} from "./components/Faq";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Thematic />
        <Whyget />
        <Future />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
