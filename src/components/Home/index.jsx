import AboutUs from "../About";
import Contact from "../Contact";
import Features from "../Features";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import Header from "../Header";
import Landing from "../Landing";
import Pricing from "../Pricing";

const Home = () => {
  return (
    <>
      <Header isLegal={false} />
      <main className="flex items-center justify-center">
        <div className="max-w-[1296px] w-full px-5">
          <Landing />
          <AboutUs />
          <Features />
          <Pricing />
          <Contact />
          <GetStarted />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
