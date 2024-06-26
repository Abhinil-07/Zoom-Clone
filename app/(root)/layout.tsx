import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative bg-dark-2">{children}</main>;
};

export default RootLayout;
