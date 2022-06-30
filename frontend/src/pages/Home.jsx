import { useState, useEffect } from "react";
import Navigation from "../components/navigation";
import { Header } from "../components/new/header";
import { Future } from "../components/new/future";
import { Services } from "../components/services";
import  Works  from "../components/works";
import { About } from "../components/about";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Future data={landingPageData.future} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Works/>
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default Home;
