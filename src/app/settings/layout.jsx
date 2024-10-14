import BackArrowSVG from "@/assets/Settings/backArrow";
import Navbar from "@/components/Settings/Navbar";
import Link from "next/link";
import styles from "./style.module.css";

const SettingsLayout = ({ children }) => {
  return (
    <div className="pt-16 text-white font-inter flex items-center justify-center relative">
      <div className={`max-w-[1280px] w-full`}>
        <Link
          href={"/home"}
          className={`text-sm flex items-center ${styles.goBack}`}
        >
          <BackArrowSVG className="w-5 h-4" />
          <span>&nbsp;Go Back to Chat</span>
        </Link>
        <div className="w-full flex gap-8 mt-4">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
