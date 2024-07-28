import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>I am Dashboard layout</h2>
      {children}
    </div>
  );
};

export default Layout;
