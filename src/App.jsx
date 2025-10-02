import "./App.scss";
//import { useState } from "react";
import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import Footer from "./components/Footer/Footer";
import Blocks from "./components/Blocks/Blocks";
import News from "./components/News/News";
import { Routes, Route } from "react-router-dom";
import DevelopML from "./components/DevelopML/DevelopML";
import Main from "./components/Main/Main";
import Store from "./components/Store/Store";

function App() {
    //const [tab, setTab] = useState("effect");
    return (
        <div className="container">
            <Header />

            <Routes>
                <Route path="/spacesyntax/" element={<Main />} />
                <Route path="/2025/03/16/ml/" element={<DevelopML />} />
                <Route path="/store/" element={<Store />} />
            </Routes>

            <main>
                {/* <IntroSection />
    <TabsSection active={tab} onChange={(current)=>setTab(current)}/>
    {tab === "main" && (
     <>
      <TeachingSection />
      <DifferencesSection />
     </>
    )}
             {tab === "feedback" && <FeedbackSection />}
             {tab === "effect" && <EffectSection />} */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
