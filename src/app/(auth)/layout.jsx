import AuthRight from "@/components/Auth/right";

export default function AuthLayout({ children }) {
  return (
    <div className="flex justify-center bg-[#0B0B0E] min-h-screen">
      <div className="w-full flex">
        <div className="flex-1 flex items-center justify-center relative">
          {children}
          <div className="left-8 bottom-8 absolute text-[#98A2B3] text-xs font-inter">
            Copyrights © 2024 katia. All Rights Reserved.
          </div>
        </div>
        <AuthRight />
      </div>
    </div>
  );
}
