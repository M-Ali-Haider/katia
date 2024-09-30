import { termsAndServices } from "@/utils/termsAndServices";
import Legal from "../Legal";

const TermsAndServices = () => {
  return (
    <main className="flex flex-col items-center pt-24 font-everett">
      <Legal item={termsAndServices} isPrivacy={false} />
    </main>
  );
};

export default TermsAndServices;
