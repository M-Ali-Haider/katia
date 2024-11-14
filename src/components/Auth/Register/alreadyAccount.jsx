import Link from "next/link";
export default function AlreadyHaveAccount() {
  return (
    <div className="w-full text-center text-sm leading-[19.6px] mt-10 3xl:text-base">
      Already have an account?&nbsp;
      <Link href="/login" className="text-[#9773FF]">
        Sign in
      </Link>
    </div>
  );
}
