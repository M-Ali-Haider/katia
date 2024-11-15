import { getSession } from "@/actions/actions";
import Home from "@/components/Home-main";
import { redirect } from "next/navigation";
const Homepage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }
  return <Home />;
};

export default Homepage;
