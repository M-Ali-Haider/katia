import Chat from "./Chat";
import GetConversation from "./Chat/GetConversation";
import PfpWrapper from "./pfp";

const Home = () => {
  return (
    <main className="flex text-white max-h-screen overflow-hidden relative">
      <div
        className="flex-1 bg-[#191B31] px-5 flex justify-center 
        relative duration-500 ease-custom-ease transition-all h-svh sm:h-screen"
      >
        <PfpWrapper />
        <GetConversation />
      </div>
    </main>
  );
};

export default Home;
