import AboutUs from "../About";
import Features from "../Features";
import Header from "../Header";
import Landing from "../Landing";
import Pricing from "../Pricing";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <div className="max-w-[1296px] w-full px-5">
          <Landing />
          <AboutUs />
          <Features />
          <Pricing />
        </div>
      </main>
    </>
  );
};

export default Home;
