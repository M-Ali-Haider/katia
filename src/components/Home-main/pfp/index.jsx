// import { getSession } from "@/actions/actions";
import Pfp from "./client";

const PfpWrapper = async () => {
  // const session = await getSession();
  return (
    <Pfp
    // pfp={session.profile_picture || "/userPlaceholder.jpg"}
    />
  );
};

export default PfpWrapper;
