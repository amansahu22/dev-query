import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileNavbar from "@/components/shared/navbar/MobileNavbar";
import Theme from "@/components/shared/navbar/Theme";
import RightSidebar from "@/components/shared/RightSidebar";
import GlobalSearch from "@/components/shared/search/GlobalSearch";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed top-0 z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          alt="DevQuery"
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Query</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Layout;
