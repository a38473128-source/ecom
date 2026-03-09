import style from "./App.module.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./section/AboutUs";
import Contact from "./section/Contact";
import Home from "./section/Home";
import Products from "./section/Products";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <AboutUs></AboutUs>
        <Products></Products>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
