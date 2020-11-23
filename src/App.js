import Services from "./components/servicios/Services";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Form from "./components/consultation/Form";
import Btn from "./components/consultation/Btn";
import NavBar from "./components/nav/NavBar";
import ImageCarousel from "./components/imgCarousel/ImageCarousel";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <NavBar />
        <ImageCarousel />
        <About />
        <Services />
        <Contact />
        <Form />
        <Btn />
      </div>
    </div>
  );
}

export default App;
