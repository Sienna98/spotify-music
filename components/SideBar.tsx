"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";

interface SideBarProps {
  children: ReactNode;
}
const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname! == "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex felx-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>SideBar Navigation</Box>
      </div>
    </div>
  );
};

export default SideBar;
