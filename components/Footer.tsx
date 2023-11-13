import React from "react";
import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-16">
      <div className="container p-12 flex justify-between">
        <p className="text-slate-600 light light:text-black  dark dark:text-white">All rights reserved.</p>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/orgs/Team-UdeA/repositories"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered Team</span>
                  <p className="text-primary">UdeA</p>
                </Link>
      </div>
    </footer>
  );
};

export default Footer;
