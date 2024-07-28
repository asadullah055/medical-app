import MegaMenu from "@/components/frontend/MegaMenu";
import Navbar from "@/components/frontend/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blue-950">
      <Navbar />
      <div className="max-w-5xl mx-auto py-3">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
};

export default Layout;
