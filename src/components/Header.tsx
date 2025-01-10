import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="w-fit m-auto">
      <h1 className="uppercase font-medium text-5xl gradient-background">
        {children}
      </h1>
    </div>
  );
};

export default Header;
