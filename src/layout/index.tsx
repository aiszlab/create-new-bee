import { type ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-screen h-screen flex justify-center items-center">{children}</div>;
};

export default Layout;
