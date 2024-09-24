import AboutUs from "../About";
import Features from "../Features";
import Header from "../Header";
import Landing from "../Landing";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <div className="max-w-[1296px] w-full px-5">
          <Landing />
          <AboutUs />
          <Features />
        </div>
      </main>
    </>
  );
};

export default Home;
