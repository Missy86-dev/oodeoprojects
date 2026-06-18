import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import SecondNav from "./components/SecondNav";
import SceneOne from "./pages/SceneOne";
import SceneTwo from "./pages/SceneOne";
import SceneThree from "./pages/SceneOne";
import Services from "./components/Services";
import Team from "./components/Team";
import Consulting from "./pages/Consulting";
import Installation from "./pages/Installation";
import ProductTraining from "./pages/ProductTraining";
import Maintenance from "./pages/Maintenance";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import HotlineService  from "./pages/HotlineService";
import {Success} from "../src/components/Success"; // adjust path if needed

function App() {
  return (
    <>
      <SecondNav />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element= {<Services/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/sceneone" element={<SceneOne />} />
        <Route path="/scenetwo" element={<SceneTwo />} />
        <Route path="/scenethree" element={<SceneThree />} />
        <Route path="/consulting" element={<Consulting/>} />
        <Route path="/installation" element={<Installation/>}/>
        <Route path="/producttraining" element={<ProductTraining/>}/>
        <Route path="/maintenance" element={<Maintenance/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/hotlineservice" element={<HotlineService/>}/>
         <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
