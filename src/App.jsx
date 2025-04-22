import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import Footer from "./components/Footer/Footer";
import Blocks from './components/Blocks/Blocks'
import News from "./components/News/News";

function App() {
 const [tab, setTab] = useState("effect");
 return (
  <div className="container">
   <Header />
    <main>
       <Blocks/>
       <News/>
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
    <Footer/>
  </div>
 );
}

export default App;
