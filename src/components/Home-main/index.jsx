import Sidebar from "../Sidebar";
import HomeMain from "./main";

const Home = () => {
  return (
    <main className="flex text-white max-h-screen overflow-hidden relative">
      <Sidebar />
      <HomeMain />
    </main>
  );
};

export default Home;
