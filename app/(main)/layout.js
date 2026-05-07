import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import React from "react";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Documentation", href: "/documentation" },
];

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* HEADER */}
      <header
        className="z-40 fixed top-0 left-0 right-0 border-b border-slate-800 
bg-slate-950/70 backdrop-blur-md 
shadow-[0_0_25px_rgba(99,102,241,0.25)]"
      >
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={navLinks} />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className='flex-1 pt-20 flex flex-col'> {children} </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
