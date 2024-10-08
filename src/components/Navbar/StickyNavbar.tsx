import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { NavList } from "./NavList";
import "./StickyNavbar.css";

export function StickyNavbar(): JSX.Element {
    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Navbar
            className="navbar-custom sticky top-0 z-10 h-max w-full rounded-none px-0 py-2 lg:px-0 lg:py-4"
            placeholder="" // Tambahkan placeholder jika diperlukan
            onPointerEnterCapture={() => {}} // Fungsi kosong sebagai pengganti
            onPointerLeaveCapture={() => {}} // Fungsi kosong sebagai pengganti
        >
            <div className="flex items-center justify-between text-blue-gray-900 w-full">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                    Rayhan Kimi
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                <NavList />
            </MobileNav>
        </Navbar>
    );
}
