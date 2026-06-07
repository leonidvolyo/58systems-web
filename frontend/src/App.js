import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import ValuePillars from "./components/ValuePillars";
import ProductSystems from "./components/ProductSystems";
import SystemStories from "./components/SystemStories";
import Process from "./components/Process";
import Why58Systems from "./components/Why58Systems";
import ClaudeAI from "./components/ClaudeAI";
import ProcessAnalysisCTA from "./components/ProcessAnalysisCTA";
import Footer from "./components/Footer";

const Home = () => (
  <div className="min-h-screen bg-paper text-ink" data-testid="home-page">
    <Header />
    <main>
      <Hero />
      <Problems />
      <ValuePillars />
      <ProductSystems />
      <SystemStories />
      <Process />
      <Why58Systems />
      <ClaudeAI />
      <ProcessAnalysisCTA />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        {/* IMPORTANT for GitHub Pages */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
