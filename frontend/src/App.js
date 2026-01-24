import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Examples from "./components/Examples";
import WhyUs from "./components/WhyUs";
import AuditDeliverables from "./components/AuditDeliverables";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" aria-hidden="true" />
      
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Examples />
        <WhyUs />
        <AuditDeliverables />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
