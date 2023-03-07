import "bulma/css/bulma.min.css";
import "./App.css";
import About from "./Screens/About";
import Footer from "./Screens/Footer";
import Home from "./Screens/Home";
import Job from "./Screens/Job";
import NavBar from "./Screens/NavBar";
import Study from "./Screens/Study";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Study />
      <Job />
      <Footer />
    </>
  );
}

export default App;
